import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/fonts/Nizzoli/Nizzoli-Black.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Inter/Inter-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Poppins/Poppins-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/bubbles/background_bubble_1.svg"
            as="image"
          />
          <link
            rel="preload"
            href="/bubbles/background_bubble_2.svg"
            as="image"
          />
          <link
            rel="preload"
            href="/bubbles/background_bubble_3.svg"
            as="image"
          />
          <link rel="preload" href="/bubbles/big_bubble_1.svg" as="image" />
          <link rel="preload" href="/bubbles/big_bubble_2.svg" as="image" />
          <link rel="preload" href="/bubbles/big_bubble_3.svg" as="image" />
          <link rel="preload" href="/bubbles/big_bubble_4.svg" as="image" />
          <link rel="preload" href="/bubbles/big_bubble_5.svg" as="image" />
          <link rel="preload" href="/bubbles/bigest_bubble_1.svg" as="image" />
          <link rel="preload" href="/bubbles/bigest_bubble_2.svg" as="image" />
          <link rel="preload" href="/bubbles/bigest_bubble_3.svg" as="image" />
          <link rel="preload" href="/bubbles/giant_bubble.svg" as="image" />
          <link rel="preload" href="/bubbles/small_bubble_1.svg" as="image" />
          <link rel="preload" href="/bubbles/small_bubble_2.svg" as="image" />
          <link rel="preload" href="/bubbles/small_bubble_3.svg" as="image" />
          <link rel="preload" href="/bubbles/small_bubble_4.svg" as="image" />
          <link
            rel="preload"
            href="/bubbles/smallest_bubble_1.svg"
            as="image"
          />
          <link
            rel="preload"
            href="/bubbles/smallest_bubble_2.svg"
            as="image"
          />
          <link
            rel="preload"
            href="/bubbles/smallest_bubble_3.svg"
            as="image"
          />
          <link
            rel="preload"
            href="/bubbles/smallest_bubble_4.svg"
            as="image"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
