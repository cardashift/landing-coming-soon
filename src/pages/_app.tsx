import { AppProps } from "next/dist/shared/lib/router/router";
import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #EBECF0;
  }
  * {
    font-family: 'Inter';
    box-sizing: border-box;
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
    src: url("/fonts/Poppins/Poppins-Regular.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "Nizzoli";
    src: url("/fonts/Nizzoli/Nizzoli-Regular.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  
`;

const theme = {};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Cardashift</title>
        <link rel="shortcut icon" type="image/jpg" href="/favicon.png"/>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
