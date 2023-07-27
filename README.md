# NodeProxy

Simple proxy application in node.js. On receiving a request, queries [Random Data API](https://random-data-api.com)
and responds to the original request with the received data.

# Run with npm

Run with `npm start`. Requires [Node.js v18.16.0](https://nodejs.org) and [npm v9.5.1](https://www.npmjs.com).

# Run in Docker

The project includes a Dockerfile

```
docker build . -t node-proxy
docker run -p 3000:3000 -d node-proxy
```
