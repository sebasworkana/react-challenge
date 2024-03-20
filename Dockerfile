FROM node:18.7.0

WORKDIR /code

RUN ["apt-get", "update"]
RUN ["apt-get", "install", "-y", "vim"]

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY src src
COPY public public

CMD ["npm", "start"]
