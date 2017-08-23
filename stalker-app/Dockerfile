FROM node:6.11.2

ADD . /web
WORKDIR /web

VOLUME ["/web/build"]

RUN pwd && ls && npm install
CMD ["npm", "run", "build"]
