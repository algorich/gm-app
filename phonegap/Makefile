install: sencha
	ant debug install

sencha:
	cd ../sencha; /opt/sencha-sdk-tools/sencha create jsb -a index.html -p app.jsb3
	cd ../sencha; /opt/sencha-sdk-tools/sencha build -p app.jsb3 -d .
	cp ../sencha/app-all.js assets/www/sencha
	cp -r ../sencha/resources assets/www/sencha