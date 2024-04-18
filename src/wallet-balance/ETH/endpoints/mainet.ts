import { Express } from 'express';
import { Web3 } from "web3"

import { isAddress } from 'web3-validator';

const web3: Web3 = new Web3(new Web3.providers.HttpProvider("https://eth-mainnet.public.blastapi.io"))

// Query the current block number
web3.eth.getBlockNumber().then(console.log);


const ETHMainWallet = (app: Express) => {

    app.get("/ETH/mainnet/:address", async (req, res) => {
        const { address } = req.params;
        if (!isAddress(address)) {
            res.status(400).send({
                error: "Invalid address"
            })
            return;
        }
        const balance = await web3.eth.getBalance(address);
        console.log(balance.toString())


        res.send({
            balance: balance.toString()
        })
    })


}
export default ETHMainWallet;
