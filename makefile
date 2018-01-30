SASS_PATH=./src/sass
CSS_PATH=./src/css
VENDOR=./vendor
CSS_OUT=${CSS_PATH}/*.css

all: help

start: deps compile-sass ## start local dev server
	cd ./src && php -S 0.0.0.0:3000

deps: ## install php dependencies
	php composer.phar install

compile-sass: ## generate minified css files
	./vendor/bin/pscss \
	-f compressed \
	-i ${SASS_PATH} < ${SASS_PATH}/app.scss > ${CSS_PATH}/app.min.css

clean: ## remove generated files
	rm -rf ${CSS_OUT}
	rm -rf ${VENDOR}

.PHONY: help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.SILENT:
