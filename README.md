# GoodbyeMoney

The money that go away is the responsible for let our pockets empty. The amount
of money that we earn is the same every month, but we spent it in several
different ways. So we have to find the leak and fix it, taking the control of
where the spent money is going.

GoodbyeMoney was created to help us in this challenge of track the money that we
spent every day.

## FAQ

### Q: GoodbyeMoney tracks the earned money?

A: No! JUST the SPENT money!

### Q: GoodbyeMoney is available for Android?

Yes, but not on google play yet. I'm finishing some features and will available
there soon.

### Q: GoodbyeMoney is available for iPhone?

Not yet, but will be available soon.


## Contributing

You have ideas, better ways of doing some things, refactorings and etc, please
make a pull request **=)**.

### Setting up the development environment

I'm assuming that you have installed:

- sencha sdk tools beta 3 (on default folder `/opt/SenchaSDKTools-2.0.0-beta3`)
- android sdk
- ant

Remember to create the file `phonegap/local.properties`. This file should set
the SDK dir, like this:

    # location of the SDK. This is only used by Ant
    sdk.dir=/home/hugo/install/android-sdk-linux

### Using the Makefile

There are two builds mode: testing and production. The production compiles, join and minify the assets (css and javascript). The testing doesn't.

On the above examples replace the **<mode>** by the mode that you will use to build.

1. If you want to install the app on the device/emulator, you have to use the `production` or `testing` taks.

2. If you want to build and run locally (with ripple), you have to use the `local-<mode>` task. After do the tests, you have to undo this using the `undo-local` task.

3. If you want to run the build just to see if it compile successfuly, you have to use the `<mode>-build` task.

**Important**: before every commit, the 3th item should be followed, to see if the changes dont break something on the compilation.