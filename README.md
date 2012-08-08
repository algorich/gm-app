# goodbye-money

Mobile app for track the spent money. Yes, JUST the SPENT money, damn it!

## Development

Install [guard](https://github.com/guard/guard/) to watch the changed files on
sencha/app dir and run `make local`:

    gem install guard guard-shell --no-rdoc --no-ri

Run the guard:

    guard

Remember to create the file `phonegap/local.properties`. This file should set
the SDK dir, like this:

    # location of the SDK. This is only used by Ant
    sdk.dir=/home/hugo/install/android-sdk-linux

The sdk folder are not versioned. So, you have to generate it and copy to sencha
folder.

### Local deploy

    make local

### Deploy to device

    make device