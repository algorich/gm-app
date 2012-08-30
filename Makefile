production: prepare-temp production-build mv-build-production install undo-mv-build

testing: prepare-temp testing-build mv-build-testing install undo-mv-build

local-production: prepare-temp production-build mv-build-production

local-testing: prepare-temp testing-build mv-build-testing

prepare-temp:
	rm -rf /tmp/impostometro
	mkdir -p /tmp/impostometro

testing-build:
	cd assets/www; /opt/SenchaSDKTools-2.0.0-beta3/sencha app build testing

mv-build-testing:
	mv assets/www /tmp/impostometro
	mv /tmp/impostometro/www/build/testing assets/www

production-build:
	cd assets/www; /opt/SenchaSDKTools-2.0.0-beta3/sencha app build package

mv-build-production:
	mv assets/www /tmp/impostometro
	mv /tmp/impostometro/www/build/package assets/www

install:
	ant debug install

undo-mv-build:
	rm -rf assets/www/
	mv /tmp/impostometro/www assets