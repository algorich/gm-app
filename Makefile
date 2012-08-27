testing:
	rm -rf /tmp/goodbye-money
	mkdir -p /tmp/goodbye-money
	cd assets/www; /opt/SenchaSDKTools-2.0.0-beta3/sencha app build testing
	mv assets/www /tmp/goodbye-money
	mv /tmp/goodbye-money/www/build/testing assets/www
	ant debug install
	rm -rf assets/www/
	mv /tmp/goodbye-money/www assets

production:
	rm -rf /tmp/goodbye-money
	mkdir -p /tmp/goodbye-money
	cd assets/www; /opt/SenchaSDKTools-2.0.0-beta3/sencha app build package
	mv assets/www /tmp/goodbye-money
	mv /tmp/goodbye-money/www/build/package assets/www
	ant debug install
	rm -rf assets/www/
	mv /tmp/goodbye-money/www assets