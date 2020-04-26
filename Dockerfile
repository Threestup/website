FROM php:7-fpm

COPY . /usr/threestup/

WORKDIR /usr/threestup

RUN apt-get update && apt-get install -y zip 

RUN make deps
RUN make compile-sass

WORKDIR /usr/threestup/src

EXPOSE 1801

ENTRYPOINT [ "php", "-S" ]
CMD ["0.0.0.0:1801"]