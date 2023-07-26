import express from 'express';
import axios from 'axios';

const server = express();
const port: number = 3000;
const randomDataUrl = 'https://random-data-api.com/api/v2/addresses'

server.get('/', async (req, res) => {
    const response = await fetchAddressData();
    res.contentType('application/json')
    res.end(JSON.stringify(response));
})
  
server.listen(port, () => {
    console.log(`Proxy listening on port ${port}`)
})

async function fetchAddressData() {
    return (await axios.get(randomDataUrl)).data;
}