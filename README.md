# Automation e2e
## Overview
##### Project Structure
```
root
|
  Mobile
  |
    Features
    |
    Screen-objects
    |
    Steps-definitions
```

##### Frameworks
Appium
nodeJS
WebdriverIO
Cucumber
Allure reporting

## Prerequisites
- install [homebrew tool](https://brew.sh/)
- install [nvm](https://formulae.brew.sh/formula/nvm#default)
- install node 16 with nvm ```nvm install 16```
- install [appium Server GUI (version v1.22.2 for macos)](https://github.com/appium/appium-desktop/releases)
- install [android studio](https://developer.android.com/studio)
- install [sdkman](https://sdkman.io/install)
- install java 8 with sdkman ```sdk install java 8.0.322-zulu```
- install allure reporter ```npm install -g allure-commandline --save-dev```


## How to run 
### Create emulator
With [this specifications](config/wdio.mobile.conf.ts) 
```
        platformName: "Android",
        platformVersion: "11",  -> create your emulator with this android version
        deviceName: "emulator_arm64",  -> create your emulator with this name
        automationName: "UiAutomator2",
        appPackage: "com.buengroup.buenbit",
        appActivity: "com.buengroup.buenbit.MainActivity",
        noReset: true,
        path: "/wd/hub",
        protocol: "http",
```        

### Start amulator and Install .apk file this
Start to run your emulator on android studio Device Manager, then drag and drop an .apk on your emulator

### Start appium Server GUI
Open appium Server GUI and start server with specifications in [configuration file](config/wdio.mobile.conf.ts)
```
    port: 4723,  -> set this port int appium Server GUI 
    hostname: "localhost",
    path: "/wd/hub",
    protocol: "http",
```
press **Start Server**

### Install framework
Open a Termminal and do ```npm install```

### Run a test
on terminal do ```npm run wdio-mobile```

### To open result report on browser
on terminal do ```npm run clean-report && allure open```