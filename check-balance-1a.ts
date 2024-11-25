import { LAMPORTS_PER_SOL, PublicKey, Connection } from "@solana/web3.js";

const clusterUrl="https://api.mainNet.solana.com";

const connection = new Connection(clusterUrl, "confirmed");
const suplliedPubKey = process.argv[2]; // provide wallet address;



if(suplliedPubKey){
    const publicKey = new PublicKey(suplliedPubKey)

    const balanceInLamports = await connection.getBalance(publicKey)

    const balanceInSol = balanceInLamports/LAMPORTS_PER_SOL;
    console.log(
        `✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSol}!`,
      );
}
else{
    console.log('provide an address');
    
}