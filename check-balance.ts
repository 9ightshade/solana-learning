//LOAD EXISTING KEYPAIR FORM SECRET KEY
import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { LAMPORTS_PER_SOL, Connection, PublicKey } from "@solana/web3.js";

// const walletAddress = document.getElementById('wallet-address');

const supplliedPubKey = process.argv[2];
if(!supplliedPubKey){
    throw new Error("Provide a public key to check the balance of!");
}


const keypair = getKeypairFromEnvironment("SECRET_KEY");

const connection = new Connection("https://api.devnet.solana.com", "confirmed");



console.log("balance in lamport", await connection.getBalance(keypair.publicKey)/LAMPORTS_PER_SOL);

console.log(
    `💰 Finished! The balance for the wallet at address ${keypair.publicKey} is ${await connection.getBalance(keypair.publicKey)/LAMPORTS_PER_SOL}!`,
  );

