# React Native
[GitHub](https://github.com/hamitmizrak/Offline_ReactNative_TodoList)
---
$ npx react-native start


---

SNIPPET
// Snippet: React Native Snippet author: jundat95
// imp
// rnc => React Native Class Component
// rnce => React Native Class Export Component
// rnpc => React Native Class Export PureComponent Component

// rnf => React Native Function Component
// rnfe => React Native Function Export Component
// rnfes => React Native Function Export Component styles
// rnfs => React Native Function Component styles

################################################################################################
################################################################################################
1-) JDK KUR
JAVA  => Çevresel Değişkenini tanımla
New => JAVA_HOME  => C:\Program Files\Microsoft\jdk-17.0.11.9-hotspot\
PATH => %JAVA_HOME%\bin
$ java --version (openjdk 17.0.11 2024-04-16 LTS)

Version=> java --version, javac --version


################################################################################################
################################################################################################
2-) ANDROID STUDIO KUR
ANDROID  => Çevresel Değişkenini tanımla 
New => ANDROID_HOME => C:\Users\Hamit-Mizrak\AppData\Local\Android\Sdk
%ANDROID_HOME%\emulator
%ANDROID_HOME%\platform-tools


################################################################################################
################################################################################################
3-) ADB (Android Debug Bridge) => Android İşletim sistemi ile çalışan cihazlarla iletişim kurmak ve onları yönetmek için kullandığımınız komut aracıdır.

NOT: ADB android studio kurduğumuzda geliyor
ADB(Android Debug Bridge) => Çevresel Değişkenini tanımla
$  adb --version

Android Debug Bridge version 1.0.41
Version 35.0.1-11580240
Installed as C:\Users\Hamit-Mizrak\AppData\Local\Android\Sdk\platform-tools\adb.exe
Running on Windows 10.0.22631

$ adb --version
$ adb devices
$ adb install path/to/your/app.apk (Uygulama Yükle)
$ adb uninstall path/to/your/app.apk (Uygulama Sil)
$ adb shell
$ adb logcat
$ adb kill-server
$ adb start-server
$ adb error

################################################################################################
################################################################################################
4-) MAVEN
New MAVEN_HOME  => D:\1_Kodlar\maven\apache-maven-3.9.8
PATH => %MAVEN_HOME%\bin

$ mvn -v


################################################################################################
################################################################################################
5-) CHOCO 
Windows üzerinde `Powershell` terminalinden programlamalar yüklemek  istiyorsak paket yönetimi olan choco yüklemek

$ Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
$ choco --version

$ choco install -y nodejs.install python2
$ choco install -y nodejs-lts microsoft-openjdk17


################################################################################################
################################################################################################
6) NODE JS
New NVM_SYMLINK  => C:\Program Files\nodejs
PATH => %NVM_SYMLINK%

$ node -v


################################################################################################
################################################################################################
7-) NPM
New NPM_HOME  => C:\Users\Hamit-Mizrak\AppData\Roaming\npm
PATH => %NPM_HOME%
$ npm -v


################################################################################################
################################################################################################
8-) NVM (Node Version Manager)
Node.js farklı sürümlerini yönetmemize yarayan komut satıdır.

~~POWERSHELL Yönetici olarak Aç~~
$ nvm --version (1.1.12)
$ nvm install latest
$ nvm use latest
$ nvm install 14.17.0
$ nvm use 14.17.0
$ nvm ls (Yüklü Node.js sürümlerini lsitele)
$ nvm ls-remote

NVM Not aşağıdaki path otomatik geliyor.
New NVM_HOME  => C:\Users\Hamit-Mizrak\AppData\Roaming\nvm
PATH => %NVM_HOME%

################################################################################################
################################################################################################
9-) NPM
## NPM ###
C:\Users\Hamit-Mizrak\AppData\Roaming\npm

## NPM VERSION ###
$ npm --version

## NPM LIST ###
$ npm -g list

## NPM CLEAN ###
$ npm cache clean --force

## NPM INSTALL ###
$ npm install -g typescript

## NPM UNINSTALL ###
$ npm uninstall -g typescript

## NPM OTHER ###
$ npm update
$ npm install
$ npm i

$ npm start --reset-cache
$ npm install -g npm
$ npm install latest

$ rm -rf node_modules
$ npm install

################################################################################################
################################################################################################
10-) VERSION
$ java --version
$ javac --version

$ adb --version

$ choco --version

$ node -v
$ npm -v
$ nvm --version

$ git -v
$ mvn -v

################################################################################################
################################################################################################
11-) REACT NATIVE YÜKLEME

NOT: Android Studio Device Açık olmalıdır.

$ npm uninstall -g react-native-cli

$ npm install -g typescript
$ npm install -g npm
$ npm install http-server -g (terminalde ==> http-server)



$ choco install -y nodejs.install python2
$ choco install -y nodejs-lts microsoft-openjdk17


~~POWERSHELL Yönetici olarak Aç~~
$ nvm install latest
$ nvm use latest


$ npx react-native init ReactNativeTodoList
$ cd ReactNativeTodoList/
$ ls -al
$ code .
$ npx react-native start 
$ npx react-native start --port=6666
$ a => android istiyorsam
$ i => android istiyorsam

veya
$ npx react-native start 
$ npx react-native start --port=6666
$ npm run start 
$ npx react-native run-android


* What went wrong:
java.io.UncheckedIOException: Could not move temporary workspace
Project => android => gradle => wrapper => gradle-wrapper.properties =>distributionUrl=https\://services.gradle.org/distributions/gradle-8.5-all.zip
`
distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=https\://services.gradle.org/distributions/gradle-8.5-all.zip
networkTimeout=10000
validateDistributionUrl=true
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
`
$ Ctrl+C
$ npx react-native start
$  cd "D:\1_Kodlar\React Native\ReactNativeTodoList" && npx react-native run-android
$ npx react-native run-android
$ npx react-native doctor



2.YOL
-------------------------------
netstat -ano | findstrt:6666
taskill /PID ID /F
npx create-expo-app Deneme2
npx expo start
npx expo start --port=9696
npx expo start --android
npx expo start --ios


---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
$ npx react-native start

// Router
$ npm install @react-navigation/native 
$ npm install @react-navigation/native-stack
$ npm install react-native-screens react-native-safe-area-context
$ npm start -- --reset-cache

$ npx react-native link // Expo kullanmıyorsak elle bağlantı gerektiren durumlarda

$ npm install
$ npm update
$ npm start --reset-cache


NOT: Android Virtual Device Üzerinde iken R(2 kez) Reload yapıyor.


---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
$ ICON EKLEMEK
npm install react-native-vector-icons --save

android/app/build.gradle 
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"


/*
Font Vector (IOS)
Xcode açalım ve Info.plist dosyasına şu satırları ekleyin

<key>UIAppFonts</key>
<array>
  <string>AntDesign.ttf</string>
  <string>Entypo.ttf</string>
  <string>EvilIcons.ttf</string>
  <string>Feather.ttf</string>
  <string>FontAwesome.ttf</string>
  <string>FontAwesome5_Brands.ttf</string>
  <string>FontAwesome5_Regular.ttf</string>
  <string>FontAwesome5_Solid.ttf</string>
  <string>Foundation.ttf</string>
  <string>Ionicons.ttf</string>
  <string>MaterialIcons.ttf</string>
  <string>MaterialCommunityIcons.ttf</string>
  <string>SimpleLineIcons.ttf</string>
  <string>Octicons.ttf</string>
  <string>Zocial.ttf</string>
</array>
*/ 

//"eslint": "^8.19.0",


---
This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
