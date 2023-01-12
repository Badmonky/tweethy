import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import Head from "next/head";

import { domainName } from "../const/yourDetails";
import "../styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      desiredChainId={activeChainId}
      authConfig={{
        domain: domainName,
        authUrl: "/api/auth",
        loginRedirect: "/",
      }}
    >
      <Head>
        <title>Tweethy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="A democratic way for communities to control their twitter account!"
        />
      </Head>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
