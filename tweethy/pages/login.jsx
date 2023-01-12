import { useAddress, ConnectWallet, Web3Button } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { contractAddress } from "../const/yourDetails";

// replace this with your contract address
// const contractAddress = "0x1fCbA150F05Bbe1C9D21d3ab08E35D682a4c41bF";

export default function Login() {
  const address = useAddress(); // Get the user's address

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Tweethy</h1>
      <p className={styles.explain}>
        A democratic way for communities to control their twitter account!
      </p>

      <p className={styles.explainSub}>
        Token Gated submissions of tweet proposals the community can vote on.
      </p>

      <hr className={styles.divider} />

      <>
        <p>
          Welcome, {address?.slice(0, 6)}...{address?.slice(-4)}
        </p>

        <ConnectWallet accentColor="#fefd0c" />

        <p>
          For demo purposes, you can claim an NFT from our collection below:
        </p>

        <Web3Button
          contractAddress={contractAddress}
          action={(contract) => contract.erc1155.claim(0, 1)}
          accentColor="#fefd0c"
        >
          Claim NFT
        </Web3Button>
      </>
    </div>
  );
}
