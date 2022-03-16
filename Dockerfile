FROM node

RUN mkdir /usr/src/goof
COPY . /usr/src/goof
WORKDIR /usr/src/goof

RUN apt update
RUN apt-get install -y vim

ENTRYPOINT ["tail", "-f", "/dev/null"]
