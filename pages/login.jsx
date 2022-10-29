import { useAddress, useLogin, Web3Button } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";

// replace this with your contract address
const contractAddress = "0x4994ca9254ACf7dEC94947281bafeCEe85A41e6e";

export default function Login() {
  const address = useAddress(); // Get the user's address
  const login = useLogin(); // Sign in

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Auth - NFT Gated Content</h1>
      <p className={styles.explain}>
        Serve exclusive content to users who own an NFT from your collection,
        using{" "}
        <b>
          <a
            href="https://portal.thirdweb.com/building-web3-apps/authenticating-users"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.purple}
          >
            Auth
          </a>
        </b>
        !
      </p>

      <p className={styles.explain}>
        This platform is secured with blockchain technology, only KAPED
        credit line holders may enter!
      </p>

      <hr className={styles.divider} />

      <>
        <p>Welcome, {address?.slice(0, 6)}...</p>

        <button
          className={styles.mainButton}
          style={{ width: 256 }}
          onClick={login}
        >
          Sign In
        </button>

        <p>
          To access Credi.fi's credit investments, obtain a key from KAPED:
        </p>

        <Web3Button
          contractAddress={contractAddress}
          action={(contract) => contract.erc1155.claim(0, 1)}
          accentColor="#F213A4"
        >
          Claim NFT
        </Web3Button>
      </>
    </div>
  );
}
