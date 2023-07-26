import express from 'express';

const server = express();
const host: string = '127.0.0.1';
const port: number = 3000;

server.get(host, (req, res) => {

})
  
server.listen(port, () => {
    console.log(`Proxy listening on port ${port}`)
})