FROM node:lts-alpine
RUN mkdir -p /code
COPY . /code
WORKDIR /code
ARG REACT_APP_COUNTAPI
RUN yarn install && \
    yarn global add serve && \
    yarn build
CMD [ "serve", "-s", "build" ]
EXPOSE 5000