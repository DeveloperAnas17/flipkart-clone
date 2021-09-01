import Head from "next/head";
import Banner from "../components/Banner";
import Books from "../components/Books";
import Catgories from "../components/Catgories";
import Electronics from "../components/Electronics";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Laptops from "../components/Laptops";
import MenFashion from "../components/MenFashion";
import Mobiles from "../components/Mobiles";
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
        <Trending />
        <Electronics />
        <Books />
        <Laptops />
        <Mobiles />
        <MenFashion />
      </div>
      <Footer />
    </div>
  );
}
