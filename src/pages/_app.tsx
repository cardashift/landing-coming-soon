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
`;

const theme = {};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Cardashift</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
