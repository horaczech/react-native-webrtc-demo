# WebRTC demo using React Native and Agora.io

## Install
Install dependencies \
`yarn`

## Get your Agora App ID
Go to agora.io account (or create one for free) and in copy 'App ID' value.

Create .env file in the project root and add variable 'EXPO_PUBLIC_AGORA_APP_ID' with value from agora.io console.

## Run it locally on Android

Prebuild to make dev build (we can't use Expo Go). That will generate ios and android directories. \
`npx expo prebuild`

Open /android dir in Android Studio

Run app on emulator or physical device or generate APK build. You have to use physical device to use cam.

## Run dev server
Start server \
`yarn start`

Make sure you are using development build and not Expo Go.

After starting server press 'a' to open app on Android device.

If you run app on 2 devices you can see the call immediately.

