// import Layout from "@/Components/Layout";
import React from "react";
import { Button } from "primereact/button";
import Link from "next/link";
export default function Lunchpad() {
  return (
    // <Layout title="Step one" description="Used to deploy contract">
    <div className="launchpad-back">
      <div
        className="text-center font-bold mt-16 text-3xl text-white"
        style={{ top: "200px", position: "relative" }}
      >
        <div>Experience launching your favorites</div>
        <div>categories in just few steps</div>
      </div>
      <div
        className="flex justify-content-around card"
        style={{ marginTop: "384px" }}
      >
        <div
          className=" text-white p-7 text-center card"
          style={{ marginBottom: "0px",background:"black" }}
        >
          <div className="font-bold">Edition</div>

          <div className="mt-5 text-sm">
            {" "}
            Myriadflow helps you to create your
          </div>
          <div>storefront unique, inviting, and</div>
          <div>memorable for customers</div>
          <div className="mt-5">
            <Link href="/deployflowaccessControl">
              <Button label="Launch Edition"  rounded style={{background:"white",color:"black"}}/>
            </Link>
          </div>
        </div>
        <div className=" text-white p-7 text-center card" style={{background:"black"}}>
          <div className="font-bold">Collection</div>
          <div className="mt-5 text-sm">Watch your collections and saves </div>
          <div>time buying one of them</div>

          <div className="mt-5">
            <Button label="Launch Collection" style={{background:"white",color:"black"}} rounded />
          </div>
        </div>
      </div>
      <div className="flex justify-content-around card">
        <div
          className="text-white p-7 text-center card"
          style={{ marginBottom: "0px",background:"black" }}
        >
          <div className="font-bold">AIREX</div>

          <div className="mt-5 text-sm"> Dynamic NFTs that provide</div>
          <div>dynamic features, changes </div>
          <div>in a dNFT smart contract </div>
          <div>are based on conditions.</div>
          <div className="mt-5">
            <Link href="/deployflowaccessControl">
              <Button label="Launch AIREX" style={{background:"white",color:"black"}} rounded />
            </Link>
          </div>
        </div>
        <div
          className="text-white p-7 text-center card "
          style={{ marginBottom: "0px",background:"black" }}
        >
          <div className="font-bold">subscription NFTs</div>
          <div className="mt-5 text-sm"> An Opportunity to access</div>
          <div>digital assets and </div>
          <div>ownership to exclusive </div>
          <div>content or services.</div>
          <div className="mt-5">
            <Link href="/deployflowaccessControl">
              <Button
                label="Launch subscription NFTs"
                style={{background:"white",color:"black"}}
                rounded
              />
            </Link>
          </div>
        </div>
        <div
          className="text-white p-7 text-center card"
          style={{ marginBottom: "0px",background:"black" }}
        >
          <div className="font-bold">Phygital NFTs</div>
          <div className="mt-5 text-sm"> Experience both the</div>
          <div>Phygital and digital worlds </div>
          <div>with myriadflow</div>
          <div className="mt-5">
            <Link href="/deployflowaccessControl">
              <Button label="Launch Phygital NFTs" style={{background:"white",color:"black"}} rounded />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
