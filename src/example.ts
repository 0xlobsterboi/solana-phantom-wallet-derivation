import { createMnemonic, recoverWallet } from ".";

function example() {
  // creates a mnemonic (can be used in other wallets for recovery)
  const mnemonic = createMnemonic();
  console.log({ mnemonic });

  // derives the first wallet using phantom's derivation scheme
  const keypair = recoverWallet(mnemonic);
  console.log({ publicKey: keypair.publicKey.toString() });
}

example();

export {};
