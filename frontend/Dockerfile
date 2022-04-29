FROM node:12.7.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY ./package*.json ./

RUN npm ci

RUN npm install react-scripts@4.0.3 -g --silent

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]

