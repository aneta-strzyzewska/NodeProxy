import express from 'express';
import axios from 'axios';
import HttpCache from './HttpCache.js';

const server = express();
const port: number = 3000;
const randomDataUrl = 'https://random-data-api.com/api/v2/addresses'

const cache = new HttpCache();

server.get('/', async (req, res) => {
    let data = cache.get('json');
    if (!data) {
        data = await fetchAddressData();
        cache.set('json', data, 60);
    }
    
    res.contentType('application/json');
    res.status(200).json(data);
})
  
server.listen(port, () => {
    console.log(`Proxy listening on port ${port}`)
})

const fetchAddressData = async () => {
    return (await axios.get(randomDataUrl)).data;
}