import { Html, Head, Main, NextScript } from "next/document";
const document = () => {
  return (
    <Html>
      <Head>
        <title id="title">Maksym Kopych | Front End Developer</title>
        <meta
          name="description"
          content="I believe I would be an excellent addition to your team
          and would strive to provide my greatest skills and best effort
          to contribute additional success to your organisation."
          id="description"
        ></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <meta content="/meta.jpeg" property="og:image" name="og:image"></meta>
        <meta
          name="og:image"
          itemprop="image"
          content="/meta.jpeg"
          property="og:image"
        ></meta>
        <meta name="twitter:image" content="/meta.jpeg" />
        <meta name="twitter:image:src" content="/meta.jpeg" />
        <meta property="og:site_name" content="Maksym Kopych: Portfolio" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default document;
