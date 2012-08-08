device: sencha
	cd phonegap; ant debug install

local:
	cd sencha; /opt/sencha-sdk-tools/sencha create jsb -a index.html -p app.jsb3
	cd sencha; /opt/sencha-sdk-tools/sencha build -p app.jsb3 -d .
	cp sencha/app-all.js phonegap/assets/www/sencha
	cp -r sencha/resources phonegap/assets/www/sencha