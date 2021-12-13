<p align="center">
    <img alt="Volta" src="https://user-images.githubusercontent.com/95992371/145737418-4154ee1d-e141-4dc4-a286-c0de1a829a22.jpeg" >
</p>

# Phantom-compatible Wallet Derivation for Solana

While working on a Solana project, I struggled to figure out how to programmatically derive wallets that would be recoverable in the Phantom wallet using a mnemonic. Since Phantom is not open-source, I wasn't able to look up the derivation path used. To my knowledge it isn't documented anywhere. I'm publishing this example to help folks programmatically generate wallets that would be restorable to Phantom using a 12-word mnemonic.

## Try it

I recommend using [Volta](https://volta.sh) for Node version management.

```
git clone https://github.com/0xlobsterboi/solana-phantom-wallet-derivation.git
cd solana-phantom-wallet-derivation
npm install
npm run test
```

## Example

![image](https://user-images.githubusercontent.com/95992371/145737169-daa7419f-8e3b-459e-8d29-68372f2a11f2.png)
![image](https://user-images.githubusercontent.com/95992371/145737202-11d13da3-84a8-40e0-8878-ef73df8dea86.png)
![image](https://user-images.githubusercontent.com/95992371/145737214-ebb78def-bab7-43e2-a8c2-388e507b210b.png)
