import { mnemonicToSeedSync, generateMnemonic } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";

const PHANTOM_DERIVATION_PATH = "m/44'/501'/0'/0'";

/**
 * Creates a 12-word mnemonic
 */
function createMnemonic(): string {
  return generateMnemonic();
}

/**
 * Generate a keypair from a mnemonic using the same derivation path as Phantom
 */
function recoverWallet(mnemonic: string): Keypair {
  const seed = mnemonicToSeedSync(mnemonic);
  const derivedSeed = derivePath(PHANTOM_DERIVATION_PATH, seed.toString("hex"));
  return Keypair.fromSeed(derivedSeed.key);
}

export { createMnemonic, recoverWallet };
