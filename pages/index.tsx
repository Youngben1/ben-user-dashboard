import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import TopCards from "../components/TopCards";
import BarChart from "../components/BarChart";
import RecentOrders from "../components/RecentOrders";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ben's Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-100">
        <Header />
        <TopCards />
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
          <BarChart />
          <RecentOrders />
        </div>
      </main>
    </>
  );
};

export default Home;
