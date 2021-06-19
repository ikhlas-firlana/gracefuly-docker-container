FROM node:lts-alpine3.13

WORKDIR /srv/app
COPY . .

ENTRYPOINT ["node", "main.js"]
