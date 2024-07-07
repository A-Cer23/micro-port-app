FROM node:alpine

WORKDIR /app

COPY package*.json .

RUN npm install \
    && rm -rf /node_modules/.bin

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]