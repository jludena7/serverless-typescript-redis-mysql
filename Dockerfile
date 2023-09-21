FROM node:18-alpine as base

RUN apk --no-cache add curl

WORKDIR /usr/app/

COPY package*.json .

# If you are building your code for production
# RUN npm ci --omit=dev
RUN npm ci

COPY . .

COPY env.docker .env

EXPOSE 5000

CMD [ "npm", "run", "dev" ]
