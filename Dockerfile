FROM node:18

WORKDIR /usr/proxy

COPY package*.json ./
COPY . .
RUN npm install
RUN npx tsc

EXPOSE 3000
CMD [ "node", "dist/app.js" ]