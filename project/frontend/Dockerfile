FROM node:17.0-buster-slim

WORKDIR /app

#ENV PATH /app/node_modules/.bin:$PATH

COPY ./package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]

