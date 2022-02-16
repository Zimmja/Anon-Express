FROM node:17

ADD . /anon-express
WORKDIR /anon-express
RUN npm install