import { Keypair } from "@solana/web3.js";

//THIS GENERATE A NEW KEYPAIR
const keypair = Keypair.generate();

console.log(`✅ Generated keypair!`);

console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, keypair.secretKey);

console.log(`✅ Finished!`);

