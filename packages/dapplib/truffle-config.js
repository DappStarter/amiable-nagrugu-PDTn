require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hero flame shadow shock note ridge coconut include private tail gather'; 
let testAccounts = [
"0xf0d4fa92bf51f5954aed271f054a4e4de08942c39e6cf20503a96960978557d6",
"0x2e56c98efc28aaa99785111f20dd416a321af44c76de6add7ed31bee0cd49269",
"0x4b5b8886b85a6a3877f07a00de9a993ab6125f0eda7f4b40b89831fe0fe72309",
"0xeb9fcce307731af1a1b7afc8ca96e2ea597ecf5b370f1202347b7d880ac4d402",
"0xd5f25dadece48c777640e731992b1472f4e46e1035ba6e89b494d926c1af1396",
"0x2754cd333b1d79fa3576abe0616cb1e3cca051cce1969605705575392de82870",
"0x40f801b16c1b0d5ff4f83ef96953377a02c0fc3854a443b5d914d8083921ef44",
"0x31905bd55e0b2a37be925fd02dc0d6f0eb4e07d8f416221797001668b0eaf0d5",
"0x41a80bb9f10a3fe8d25e552407ca88d1e705a4c32c9f752738f48eafbf75082f",
"0x280665b3951078602ab9900928e19a34b3d052773addca05ebe7817692d25eba"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


