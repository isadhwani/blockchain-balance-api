import { Express } from 'express';
import { Web3 } from "web3"

import { isAddress } from 'web3-validator';

const web3: Web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.ankr.com/optimism"))

// Query the current block number
web3.eth.getBlockNumber().then(console.log);


const ETHOptWallet = (app: Express) => {
    app.get('/hello', (req, res) => {
        res.send('Life is good!')
    })

    app.get("/ETH/optimism/:address", async (req, res) => {
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
export default ETHOptWallet;
