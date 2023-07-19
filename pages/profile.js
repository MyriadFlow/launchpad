import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";
import Layout from "../Components/Layout";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
const Web3 = require("web3");
import { NFTStorage } from "nft.storage";
import { convertUtf8ToHex } from "@walletconnect/utils";
const YOUR_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDFFODE2RTA3RjBFYTg4MkI3Q0I0MDQ2QTg4NENDQ0Q0MjA4NEU3QTgiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3MzI0NTEzNDc3MywibmFtZSI6Im5mdCJ9.vP9_nN3dQHIkN9cVQH5KvCLNHRk3M2ZO4x2G99smofw";
import axios from "axios";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import Link from "next/link";

import { getAuth, signInWithPopup, TwitterAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { initializeApp } from 'firebase/app';

import { generateCodeVerifier, generateCodeChallenge } from '../utils/pkceUtils';

const TWITTER_CLIENT_ID = "QXFsUzJwelJTVDd1TnpVR0VCNzE6MTpjaQ" // give your twitter client id here

const codeVerifier = generateCodeVerifier();
const codeChallenge = generateCodeChallenge(codeVerifier);

// twitter oauth Url constructor
function getTwitterOauthUrl() {
  const rootUrl = "https://twitter.com/i/oauth2/authorize";
  const options = {
    response_type: "code",
    client_id: TWITTER_CLIENT_ID,
    redirect_uri: "http://www.localhost:3000/api/oauth/twitter", // client url cannot be http://localhost:3000/ or http://127.0.0.1:3000/
    scope: ["users.read", "follows.read"].join(" "), // add/remove scopes as needed
    state: "state",
    code_challenge: codeChallenge,
    code_challenge_method: "plain",
  };
  const qs = new URLSearchParams(options).toString();
  return `${rootUrl}?${qs}`;
}

const getUserDataFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const userData = localStorage.getItem('twitteruserData');
    return userData ? JSON.parse(userData) : null;
  }
  return null;
};

const client = new NFTStorage({ token: YOUR_API_KEY });
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;


function Profile() {

  useEffect(() => {
    const userData = getUserDataFromLocalStorage();
    settwitt(userData);
  }, []);


  const profile = {
    name: "",
    country: "",
    profilePictureUrl: "",
  };


  const walletAddr = useSelector(selectUser);
  var wallet = walletAddr ? walletAddr[0] : "";
  const [hasRole, setHasRole] = useState(true);
  const [visible, setVisible] = useState(false);
  const [profileData, setProfileData] = useState({ ...profile });
  const [updateProfile, setupdateProfile] = useState({ ...profile });
  const router = useRouter();
  const [twitt, settwitt] = useState(null);
  const [fb, setfb] = useState(null);

  async function uploadImage(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const blobDataImage = new Blob([e.target.files[0]]);
      const metaHash = await client.storeBlob(blobDataImage);
      setupdateProfile({
        ...updateProfile,
        profilePictureUrl: `ipfs://${metaHash}`,
      });
    } catch (error) {
      console.log("Error uploading file: ", error);
    } finally {
      setLoading(false);
    }
  }

  const updateData = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("platform_token");
    try {
      if (
        !updateProfile.name.trim() ||
        !updateProfile.country.trim()
      )
        alert("Do not leave any field empty!");
      else {
        var signroledata = JSON.stringify({
          name: "Alka Rashinkar",
          country: "India",
          profilePictureUrl: "https://unsplash.it/500",
        });

        const config = {
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          data: signroledata,
        };
        setLoading(true);
        await axios.patch(
          "https://testnet.gateway.myriadflow.com/api/v1.0/profile",
          { ...updateProfile },
          config
        );
        alert("Updation successful!");
        setShowModal(false);
        getProfile();
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    } finally {
      setupdateProfile({ profile });
      setLoading(false);
    }
  };

  const user = useSelector(selectUser);
  const getRole = async () => {
    const token = localStorage.getItem("platform_token");
    const role_id = localStorage.getItem("platform_roleid");

    const config1 = {
      url: `${BASE_URL}/api/v1.0/roleId/${role_id}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let roledata;
    try {
      roledata = await axios(config1);
    } catch (e) {
      console.log(e);
    }

    let web3 = new Web3(Web3.givenProvider);
    let completemsg = roledata.data.payload.eula + roledata.data.payload.flowId;
    const hexMsg = convertUtf8ToHex(completemsg);
    const result = await web3.eth.personal.sign(hexMsg, wallet);

    var signroledata = JSON.stringify({
      flowId: roledata.data.payload.flowId,
      signature: result,
    });
    //This is used to create a role/generate the flowid and signature
    const config = {
      url: `${BASE_URL}/api/v1.0/claimrole`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: signroledata,
    };

    try {
      const response = await axios(config);
      const msg = await response?.data?.message;
      setHasRole(true);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  };
  //use to generate the hex msg and
  const authorize = async () => {
    const { data } = await axios.get(
      `${BASE_URL}/api/v1.0/flowid?walletAddress=${wallet}`
    );

    let web3 = new Web3(Web3.givenProvider);
    let completemsg = data.payload.eula + data.payload.flowId;
    const hexMsg = convertUtf8ToHex(completemsg);
    const result = await web3.eth.personal.sign(hexMsg, wallet);
    var signdata = JSON.stringify({
      flowId: data.payload.flowId,
      signature: result,
    });
    //this is use to genarate the token /perceto
    const config = {
      url: `${BASE_URL}/api/v1.0/authenticate`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: signdata,
    };
    try {
      const response = await axios(config);
      const token = await response?.data?.payload?.token;
      localStorage.setItem("platform_token", token);
      getProfile();
      getRole();
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  const getProfile = async () => {
    const token = localStorage.getItem("platform_token");
    const config = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    setLoading(true);
    axios
      .get(`${BASE_URL}/api/v1.0/profile`, config)
      .then((res) => {
        const {
          data: {
            payload: {
              name,
              country,
              profilePictureUrl,
            },
          },
        } = res;

        setProfileData({
          ...profileData,
          name,
          country,
          profilePictureUrl,
        });
        setupdateProfile({
          ...profileData,
          name,
          country,
          profilePictureUrl,
        });
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };


  //----------------------------insta auth -----------------------------------------//

  const handleInstagramAuth = () => {
    const redirectUri = 'https://launchpad.myriadflow.com/instagram-auth-success/';

    const clientId = 593016509511308;
    const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user_profile,user_media&response_type=code`;

    window.location.href = authUrl;
  };


  // -------------------       discord auth        ------------------------------------------//

  const handleLogin = () => {
    // Replace with your Discord application's client ID and redirect URI
    const clientId = '1127173732104929332';
    const redirectUri = 'http://localhost:3000/api/discord-redirect'; // Replace with your redirect URI

    // Generate the Discord authorization URL
    const authorizationUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=identify`;

    window.location.href = authorizationUrl;
  };



  const {
    name,
    country,
    profilePictureUrl,
  } = profileData;


  return (
    <Layout
      title="Launchpad Profile Page"
      description="Use to show metamask Profile details of the users"
    >
      {/* {loading && <Loader />} */}
      {visible ? (
        <>

          <Dialog header="Connect to your social media accounts" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
            <div className="flex flex-wrap justify-content-center gap-2">

              <div className="card flex justify-content-center">
                <Card title="Instagram Account"
                  footer={
                    <div className="flex flex-wrap justify-content-start gap-2">
                      <Button onClick={handleInstagramAuth} label="Connect" icon="pi pi-check" />
                      <Button label="Cancel" icon="pi pi-times" className="p-button-outlined p-button-secondary" />
                    </div>
                  }
                  header={<img alt="Card" src="insta.png" />}

                  className="md:w-20rem">
                </Card>
              </div>

              <div className="card flex justify-content-center">
                <Card title="Discord Account"
                  footer={
                    <div className="flex flex-wrap justify-content-start gap-2">
                      <Button onClick={handleLogin} label="Connect" icon="pi pi-check" />
                      <Button label="Cancel" icon="pi pi-times" className="p-button-outlined p-button-secondary" />
                    </div>
                  }
                  header={<img alt="Card" src="Discord.jpg" />}

                  className="md:w-20rem">
                </Card>
              </div>

              <div className="card flex justify-content-center">
                <Card title="Facebook Account"
                  footer={
                    <div className="flex flex-wrap justify-content-start gap-2">
                      {
                        fb ? (
                          <>
                            <Button label="Connected" icon="pi pi-check" />
                          </>
                        ) : (
                          <>
                            <Button label="Connect" icon="pi pi-check" />
                          </>
                        )
                      }
                      <Button label="Cancel" icon="pi pi-times" className="p-button-outlined p-button-secondary" />
                    </div>
                  }
                  header={<img alt="Card" src="Facebook.jpg" />}

                  className="md:w-20rem">
                </Card>
              </div>

              <div className="card flex justify-content-center">
                <Card title="Twitter Account"
                  footer={
                    <div className="flex flex-wrap justify-content-start gap-2">
                      <a href={getTwitterOauthUrl()} label="Connect" icon="pi pi-check">Connect</a>
                      {
                        twitt ? (
                          <>
                            <Button label="Connected" icon="pi pi-check" />
                          </>
                        ) : (
                          <>
                             {/* <a href={getTwitterOauthUrl()} label="Connect" icon="pi pi-check">Connect</a> */}
                          </>
                        )
                      }
                      <Button label="Cancel" icon="pi pi-times" className="p-button-outlined p-button-secondary" />
                    </div>
                  }
                  header={<img alt="Card" src="twitter.png" />}

                  className="md:w-20rem">
                </Card>
              </div>

              <div className="card flex justify-content-center">
                <Card title="Telegram Account"
                  footer={
                    <div className="flex flex-wrap justify-content-start gap-2">
                      <Button label="Connect" icon="pi pi-check" />
                      <Button label="Cancel" icon="pi pi-times" className="p-button-outlined p-button-secondary" />
                    </div>
                  }
                  header={<img alt="Card" src="telegram.webp" />}
                  className="md:w-20rem">
                </Card>
              </div>
            </div>
          </Dialog>

        </>
      ) : null}


      <div className="pt-5">
        <div className="flex p-5 justify-content-around mt-5">
          <div>
            <div>
              <div className="mt-5 text-3xl">
                <div className="font-bold text-gray-500 dark:text-white">
                  USER DETAILS
                </div>
                <div>
                  <div className="flex mt-3">
                    {" "}
                    <div className="pb-4 text-2xl text-gray-500 dark:text-white">
                      Wallet Details:
                    </div>
                    <div className="ml-5 text-gray-500 dark:text-white">{user}</div>
                  </div>
                </div>
                <div>
                  <div className=" pb-4 text-2xl text-gray-500 dark:text-white">
                    Roles :{" "}
                    <span className=" text-gray-500 dark:text-white">
                      {hasRole && " Creator"}{" "}
                    </span>{" "}
                  </div>
                </div>
                <div className="pb-4 text-2xl">
                  <div className="flex">
                    <div className="text-gray-500 dark:text-white">Name :</div>
                    <div className="text-gray-500 dark:text-white">{name}</div>
                  </div>
                </div>
                <div className="text-2xl text-gray-500 dark:text-white">
                  <div className="flex">
                    <div className="text-gray-500 dark:text-white">Country :</div>
                    <div className="text-gray-500 dark:text-white">{country}</div>
                  </div>
                </div>

                <div className="flex flex-wrap mt-5 gap-4">
                  <div>
                    <Button label="Edit profile" rounded />
                  </div>
                  <div>
                    <Button label="Connect to social media" onClick={() => setVisible(true)} rounded />
                  </div>
                </div>

                {twitt ? (
                  <>
                    <p className="flex p-5 justify-content-around">Twitter account connected</p>
                    <div className="flex justify-content-around">
                      <div>
                        {/* <img style={{ height: "150px", borderRadius: '50%' }} src={twitt.reloadUserInfo.providerUserInfo[0].photoUrl}></img> */}
                      </div>
                      <div className="flex text-2xl">
                        <div className="ml-5 text-gray-500 dark:text-white">
                          <Link href={`https://twitter.com/${twitt.screen_name}`} target="_blank">
                            Go to Twitter profile
                          </Link>
                          <p>User ID : {twitt.screen_name}
                          </p>
                          {/* <p>Screen Name: {twitt.screen_name}</p> */}
                          {/* <p>Joined on: {new Date(parseInt(twitt.metadata.createdAt)).toDateString()}</p> */}
                        </div>
                      </div>

                    </div>
                  </>
                ) : null}


                {fb ? (
                  <>
                    <p className="flex p-5 justify-content-around">Facebook</p>
                    <div className="flex justify-content-around">
                      <div>
                        <img style={{ height: "150px", borderRadius: '50%' }} src={fb.reloadUserInfo.photoUrl}></img>
                      </div>
                      <div className="flex text-2xl">
                        <div className="ml-5 text-gray-500 dark:text-white">
                          <Link href={`https://www.facebook.com/profile.php?id=${fb}`} target="_blank">
                            Go to Facebook profile
                          </Link>
                          <p>Screen Name: {fb.providerData[0].displayName}</p>
                          <p>Joined on: {new Date(parseInt(fb.reloadUserInfo.createdAt)).toDateString()}</p>
                        </div>
                      </div>

                    </div>
                  </>
                ) : null}

              </div>
            </div>
          </div>
          <div>
            <img style={{ height: "300px" }} src="signatureseries.png"></img>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default Profile;