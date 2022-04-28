FROM node:17.0-buster-slim

WORKDIR /app

#ENV PATH /app/node_modules/.bin:$PATH

COPY ./package*.json ./

RUN npm ci

RUN npm install axios --save

RUN npm audit fix --force

COPY . .

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]

