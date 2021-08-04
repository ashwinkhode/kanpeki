FROM node:lts-buster-slim

# Create app directory
WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json
# COPY package-lock.json /usr/src/app/package-lock.json
RUN npm install

COPY . /usr/src/app

EXPOSE 4000

CMD [ "npm", "run", "start" ]