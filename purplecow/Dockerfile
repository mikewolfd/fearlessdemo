FROM node:lts-alpine
RUN mkdir -p /code
COPY . /code
WORKDIR /code
RUN yarn install && \
    yarn global add serve && \
    yarn build
CMD [ "serve", "-s", "build" ]
EXPOSE 5000