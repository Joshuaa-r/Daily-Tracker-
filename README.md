# Daily Tracker

Daily Tracker is a Capacitor Android app wrapping the existing mobile web UI. Habits, reminders, display name, and imported calendar events are stored locally on the device.

## Local development

```sh
npm ci
npx cap sync android
npm run android:build
```

The unsigned release APK is written to `android/app/build/outputs/apk/release/app-release.apk`.

## GitHub Actions APK

Every push and manual workflow run builds a signed release APK. Open the completed **Build APK** run in the Actions tab and download the `daily-tracker-release-apk` artifact, then install the APK on the phone. Android may require enabling installation from unknown sources for the app used to open the download.

To publish the APK in **Releases**, create and push a version tag:

```sh
git tag v1.0.0
git push origin v1.0.0
```

The workflow will attach `app-release.apk` to the generated GitHub Release.

The web app source is `www/index.html`. The native Android project is committed under `android/`.
