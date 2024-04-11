import Web3Modal from "web3modal";
import { ethers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";

const etherContract = async (contractAddress, abi) => {
  const options = new WalletConnectProvider({
    rpc: {
      137: process.env.NEXT_PUBLIC_POLYGON_MATICVIGIL_RPC,
    },
    rpcUrl: process.env.NEXT_PUBLIC_POLYGON_MATICVIGIL_RPC,
  });
  const web3Modal = new Web3Modal({
    network: "polygon",
    package: WalletConnectProvider,
    options: options,
    cacheProvider: true,
  });
  const connection = await web3Modal.connect();
  const provider = new ethers.providers.Web3Provider(connection);
  const signer = provider.getSigner();
  return new ethers.Contract(contractAddress, abi, signer);
};

export default etherContract;
