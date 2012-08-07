# goodbye-money

Mobile app for track the spent money. Yes, JUST the SPENT money, damn it!

## Install

    gem install thin

## Development

Remember to create the file `phonegap/local.properties`. This file should set
the SDK dir, like this:

    # location of the SDK. This is only used by Ant
    sdk.dir=/home/hugo/install/android-sdk-linux

The sdk folder are not versioned. So, you have to generate it and copy to sencha
folder.

### Start web server

    thin start