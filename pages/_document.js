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
        <meta content="/meta.jpeg" property="og:image" name="og:image"></meta>
        <meta
          name="og:image"
          itemprop="image"
          content="/meta.jpeg"
          property="og:image"
        ></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default document;
