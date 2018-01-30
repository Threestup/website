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

_That's it, have fun!_
