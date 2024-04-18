import express, { Express, Request, Response } from 'express';
import cors from "cors";
import ETHMainWallet from './wallet-balance/ETH/endpoints/mainet';
import ETHOptWallet from './wallet-balance/ETH/endpoints/optimisim';
import SupportedBlockchains from './supportedBlockchains';




const app = express();
app.use(
    cors({
        credentials: true,
        origin: "*"
    })
);

app.get('/ping', (req, res) => {
    res.send('pong')
})


ETHMainWallet(app);
ETHOptWallet(app);
SupportedBlockchains(app);
app.listen(process.env.PORT || 3000);



