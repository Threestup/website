## Getting started

### Clone the repo

With [git](https://git-scm.com/downloads) installed

```sh
git clone git@github.com:Threestup/website.git
```

### Install PHP

For this project we are using PHP 7.0.

### Install dependencies (optional)

You can install the dependencies by yourself, but this rule is trigger by `make start`.
Go to the root of this folder then :

```sh
make deps
```

### Run the server

Install the PHP dependencies then build the css file, and start a php server.

```sh
make start
```

### Production

Build the production css file

```sh
make compile-sass
```

## Docker

A `Dockerfile` and `docker-compose.yml` are available

`docker-compose up`and fire away

_That's it, have fun!_

### Deploy

Run

```sh
docker build --platform linux/amd64 -t threestup/website:latest .
```

Make sure you are logged into docker hub with a user that has access to threestup.

```sh
docker push threestup/website:latest
```

After it updated on docker hub, go to the server (VPS currently):

```sh
cd vps/threestup
sudo docker pull threestup/website
sudo docker-compose up -d
```
