import Head from "next/head";
import { FC } from "react";
import InnerHTML from "dangerously-set-html-content";
import PWATags from "./PWA";

interface SEOArgs {
  page: string;
}

const SEO: FC<SEOArgs> = (args) => {
  return (
    <>
      <Head>
        <title>frontend | {args.page}</title>
        <meta name="description" content="frontend" />
        <meta name="keywords" content="lamp" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link href="/favicon.ico" rel="icon" type="image/png" sizes="16x16" />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <meta name="theme-color" content="#317EFB" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        />
        <InnerHTML
          html={`
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.REACT_APP_GOOGLE_ANALYTICS_ID}');
          </script>
        `}
        />
      </Head>
      <PWATags />
    </>
  );
};

export default SEO;
