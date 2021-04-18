import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.svg" />
        <link rel="stylesheet" />
      </Head>

      <main>{children}</main>
    </>
  );
};

export default Layout;
