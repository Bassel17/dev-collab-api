import 'dotenv/config';
import express from 'express';
const app = express();
const port = process.env.port;

app.listen(port,()=>{
    console.log(`listening at http://localhost:${port}`);
});

app.get('/', (req, res) => res.send('Hello World!'))