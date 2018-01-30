sass_path=./src/sass
css_path=./src/css

start:
	make compile-sass
	cd ./src && php -S 0.0.0.0:3000

compile-sass:
	./vendor/bin/pscss \
	-f compressed \
	-i ${sass_path} < ${sass_path}/app.scss > ${css_path}/app.min.css
