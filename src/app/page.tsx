import Banner from "@/components/sections/Landing/Banner";
import SignatureSeries from "@/components/sections/Landing/SignatureSeries";
import FusionSeries from "@/components/sections/Landing/FusionSeries"
import Instagen from "@/components/sections/Landing/Instagen"
import EtherumPass from "@/components/sections/Landing/EtherumPass";
import DynamicRealm from "@/components/sections/Landing/Dynamic"
import PhygitalNft from "@/components/sections/Landing/PhygitalNft"
import EternalSoul from "@/components/sections/Landing/EthernalSoul"
import TradeHub from "@/components/sections/Landing/TradeHub"
import AccessMaster from "@/components/sections/Landing/AccessMaster"
import React from "react";
import Footer from "@/components/sections/Footer";
import AuthModal from "@/components/sections/AuthModal"

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center scrollbar-hidden">
      <Banner />
      <SignatureSeries />
      <FusionSeries />
      <Instagen />
      <EtherumPass />
      <DynamicRealm />
      <PhygitalNft />
      <EternalSoul />
      <TradeHub />
      <AccessMaster />
      <Footer />
    </main>
  );
}
