FROM node:23.11-slim
WORKDIR ./app
COPY package.json ./
RUN npm install
COPY . .

CMD ["node", "index.ts"]




