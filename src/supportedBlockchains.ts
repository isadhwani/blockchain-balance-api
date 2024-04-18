import { Express } from "express";

const supportedBlockchains = [
    {
        name: "Ethereum",
        chainId: 1,
        rpcUrl: "https://eth-mainnet.public.blastapi.io",
        blockExplorerUrl: "https://etherscan.io",
        image: "https://s2.coinmarketcap.com/static/img/coins/128x128/1027.png",

        layer2s: [
            {
                name: "Optimism",
                chainId: 10,
                rpcUrl: "https://rpc.ankr.com/optimism",
                blockExplorerUrl: "https://optimistic.etherscan.io",
                image: "https://s2.coinmarketcap.com/static/img/coins/128x128/1027.png"
            }
        ]
    },
    {
        name: "Bitcoin",
        chainId: 0,
        rpcUrl: "",
        blockExplorerUrl: "https://blockchain.info",
        image: "https://s2.coinmarketcap.com/static/img/coins/128x128/1.png",
        layer2s: []
    }
]


const SupportedBlockchains = (app: Express) => {

    app.get("/supported-blockchains", async (req, res) => {
        res.send(JSON.stringify(supportedBlockchains));

    })


}
export default SupportedBlockchains;
