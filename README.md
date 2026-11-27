# Daily Tracker

Daily Tracker is a Capacitor Android app. The current native release is **v1.1.6**.

## Install the APK

Download `Daily Tracker.apk` from the [v1.1.6 release](https://github.com/Joshuaa-r/Daily-Tracker-/releases/tag/V1.1.6), copy it to your Android phone, and allow installation from unknown sources when Android asks.

## Build locally

```sh
npm ci
npx cap sync android
./android/gradlew -p android assembleRelease
```

The web app source is `www/index.html`; the Android project is under `android/`.

## Google sign-in

The optional Google sign-in integration uses package ID `com.joshuaa.dailytracker`. Set the web client ID in `www/index.html` in place of `PASTE_WEB_CLIENT_ID_HERE` and configure the matching OAuth clients in Google Cloud Console before using sign-in.
