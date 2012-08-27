device:
	# the correct way to do this is using `sencha app build production` but its
	# not working. try this again when sencha-sdk-tools jump the 2.0.0.beta3 version
	cd assets/www; mv index.html index-dev.html; mv index-production.html index.html
	cd assets/www; cp sdk/sencha-touch-all.js .
	cd assets/www; /opt/SenchaSDKTools-2.0.0-beta3/sencha create jsb -a index.html -p app.jsb3
	cd assets/www; /opt/SenchaSDKTools-2.0.0-beta3/sencha build -p app.jsb3 -d .
	ant debug install
	cd assets/www; mv index.html index-production.html; mv index-dev.html index.html
	rm assets/www/sencha-touch-all.js

undo:
	cd assets/www; mv index.html index-production.html; mv index-dev.html index.html
	rm assets/www/sencha-touch-all.js