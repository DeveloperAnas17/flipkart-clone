import Head from "next/head";
import Banner from "../components/Banner";
import Catgories from "../components/Catgories";
import Electronics from "../components/Electronics";
import Header from "../components/Header";
import Trending from "../components/Trending";

export default function Home() {
  return (
    <div className="bg-gray-200 h-full">
      <Head>
        <title>Flipkart Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Catgories />
      <div className="max-w-[1600px] mx-auto space-y-2">
        <Banner />
        {/* <div></div> */}
        <Trending />
        <Electronics />
      </div>
    </div>
  );
}
