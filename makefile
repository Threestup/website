sass_path=./src/sass
css_path=./src/css
css_out=.${css_path}/*.css

all: help

start: compile-sass ## start local dev server
	cd ./src && php -S 0.0.0.0:3000

compile-sass: ## generate minified css files
	./vendor/bin/pscss \
	-f compressed \
	-i ${sass_path} < ${sass_path}/app.scss > ${css_path}/app.min.css

clean: ## remove generated files
	rm -rf ${css_out}

.PHONY: help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.SILENT:
