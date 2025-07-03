FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
COPY server/package*.json ./server/
COPY client/package*.json ./client/

RUN npm install

COPY server/ ./server/

WORKDIR /app/server

EXPOSE 3000
CMD ["npm", "run", "dev"]