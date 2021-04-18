import Head from "next/head";
import HomeStyle from "../styles/Pages/Home.module.scss";

import Hero from "../components/Pages/Hero";
import List from "../components/Pages/List";
import ContactBtn from "../components/Elements/ContactBtn";

export default function Home() {
  return (
    <>
      <Head>
        <title>Daniel Brandt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={HomeStyle.container}>
        <Hero />
        <List />
        <ContactBtn />
      </section>
    </>
  );
}
