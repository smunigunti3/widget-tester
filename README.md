# If running into errors while running:

Check build:
- cat node_modules/expo-widgets/package.json | grep '"version"'

Ensure @expo/ui installed:
- cat node_modules/@expo/ui/package.json | grep '"version"'

Install correct version:
- npm install expo-widgets@55.0.0
- npm view expo-widgets versions --json
- npm install expo-widgets@55.0.20
- rm -rf ios
- npx expo prebuild --platform ios --clean
- cd ios && pod install && cd ..
- npx expo run:ios
