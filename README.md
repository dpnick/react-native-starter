# react-native-starter

> Disclaimer : this repo is only a way to start a new react-native (expo) app. A lot of other config are possible. This is always a work in progress i will keep updating it.

## Purpose

After creating multiple apps I decided to create this react-native starter template to avoid starting from scratch each time.
This repo contains all the features i need in (almost) every projects.

## Getting started

1. `git clone https://github.com/dpnick/react-native-starter.git your-app-name`
2. `cd your-app-name`
3. `npm i`
4. run it either on android `npm run android` or iOS `npm run ios` (check `package.json` for all scripts)

## Features

> Don't forget to disable commented lines about environments files in `.gitignore`

- [x] typescript
- [x] multiple environments variables (simple custom script see `set-environments.js` and package.json)
- [x] enable hermes on both android and iOS
- [x] expo bare-workflow (more on this here https://docs.expo.dev/introduction/managed-vs-bare/)
- [x] styled components / styled system
- [x] theming (light and dark) + switch feature + persistance
- [x] translation (based on user preferences) + switch feature + persistance
- [x] navigation (https://reactnavigation.org/docs/getting-started)
- [x] AsyncStorage for persistane (will move to react-native-mmkv asap)

## WHAT'S NEXT ?

I'm currently thinking about how to improve it without making it too opinionated.
Maybe :

- [ ] Implement Splash screen
- [ ] Move from AsyncStorage to react-native-mmkv
- [ ] Toast component to give feedback to the user (like react-native-styled-toast or custom)
- [ ] Auth system (like firebase)

If you have any idea feel free.

## Requests

If you think something is missing, feel free to send me a message.

## Support

If you like it, please consider leaving a star it means a lot to me :)
