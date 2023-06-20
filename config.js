
import { stringToPath } from '@cosmjs/crypto'

export default {
    port: 8088, // http port 
    db: {
        path: "./db/faucet.db" // save request states 
    },
    project: {
        name: "Factory Testnet",
        logo: "https://ping.pub/logo.svg",
        deployer: `<a href="#">FactoryFoundation</a>`
    },
    blockchains: [
        {
            type: 'Ethermint',
            ids: {
                chainId: 2023,
                cosmosChainId: 'factory_2023-501',
            },
            name: "factory_2023-501",
            endpoint: {
                // make sure that CORS is enabled in rpc section in config.toml
                // cors_allowed_origins = ["*"]
                rpc_endpoint: "http://199.192.25.25:26657/",
                evm_endpoint: "http://199.192.25.25:8545/",
            },
            sender: {
                mnemonic: "divorce thought hidden wide dash crop tone position box library can feed",
                option: {
                    hdPaths: [stringToPath("m/44'/60/0'/0/0")],
                    prefix: "factory"
                }
            },
            tx: {
                amount: {
                    denom: "aftr",
                    amount: "5000000000000000000"
                },
                fee: {
                    amount: [
                        {
                            amount: "100000",
                            denom: "aftr"
                        }
                    ],
                    gas: "10000000000000"
                },
            },
            limit: {
                // how many times each wallet address is allowed in a window(24h)
                address: 3, 
                // how many times each ip is allowed in a window(24h),
                // if you use proxy, double check if the req.ip is return client's ip.
                ip: 10
            }
        },
    ]    
}