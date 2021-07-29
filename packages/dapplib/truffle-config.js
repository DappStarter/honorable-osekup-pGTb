require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half kiwi orange tooth bike curtain net pupil inflict clip tail theme'; 
let testAccounts = [
"0x37cae73db44cf5ed05ae71726f17e1f5ac52d674da62bfe96ba6cc68b96471e6",
"0xf07ce0397dcb58389b0c5188466dc594533048355df49cc7ecc4ce68dbf110cc",
"0x7ca9889e834815d4bd75ffd5c708db6fcc848a62771f055a87764e1188df4290",
"0x2f3073892cce3db527ec76a9a9eb97998e2ffe67fa1fdd8394d4b7737ebc8c6b",
"0xe5ce169e4892c3ccb4f80880c837e8367029fcda447ecc7dcf1c8726a74d3666",
"0xe92c24bcf4da790df8e84b485b9ad71c556d87b1b498a15ca49d2010bf6cc63a",
"0x580df5604da631347fb21f08465005aaec9821da2bcab10b5b2d9acc9d5c5ec9",
"0x93d7311a6de277ffa0e29a60816690580879b41ae74947a8707b0e32164c6380",
"0xba1366931204aca094dd211b2b4f367c7fe91ceee0f4c65fd0e73e699eb81ae8",
"0x206e87cabac859d521d63e1403785283e959c567a2a10416eeef3e580511297c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

