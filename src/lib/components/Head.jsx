import Head from "next/head";

const HEAD = ({ pageTitle, pageDescription }) => (
  <Head>
    <title>{pageTitle}</title>
    <meta name="description" content={pageDescription} />
    ...
  </Head>
);

export default HEAD;
