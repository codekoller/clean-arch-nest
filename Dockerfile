FROM node:16.18-alpine3.16

WORKDIR /app/

RUN mkdir -p /app/

COPY package.json /app/

RUN yarn cache clean \
  rm yarn.lock \
  rm -rf node_modules \
  yarn install

COPY . /app/

EXPOSE 3003

CMD [ "yarn", "start:debug" ]