FROM node

WORKDIR /app

COPY package*.json ./
COPY server/package*.json ./server/
COPY client/package*.json ./client/

RUN npm install

COPY client/ ./client/

WORKDIR /app/client

EXPOSE 5173
CMD npm run dev