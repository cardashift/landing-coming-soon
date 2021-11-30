import { useRouter } from "next/dist/client/router";
import { AppProps } from "next/dist/shared/lib/router/router";
import Head from "next/head";
import { useEffect } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Script from 'next/script'
import * as gtag from "../lib/gtag";

export const GA_TRACKING_ID = "ldBeeuzj1Ebxi2f5TAey";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #EBECF0;
  }
  @font-face {
    font-family: "Inter";
    src: url("/fonts/Inter/Inter-Regular.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  
  @font-face {
    font-family: "Poppins";
    src: url("/fonts/Poppins/Poppins-SemiBold.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "Nizzoli";
    src: url("/fonts/Nizzoli/Nizzoli-Black.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  
`;

const theme = {};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>
          Cardashift - ICO Coming Soon - Impact Launchpad on Cardano $ADA
        </title>
        <meta
          name='description'
          content='Cardashift funds and works intensively with impact startups that are solving social and environmental issues.'
        />
        <link rel='shortcut icon' type='image/jpg' href='/favicon.png' />
      </Head>
      <Script
          strategy='afterInteractive'
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <Script
          id='gtag-init'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
