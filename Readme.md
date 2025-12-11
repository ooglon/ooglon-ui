# OOGLON UI

OOGLON UI Lib for React Native.

## Usage

1. Create a new Expo project: `yarn create expo --template`

2. Select template `Navigation (TypeScript) - File-based routing with TypeScript enabled`

3. Clean it (remove components, constants, app/\* and every non-essential folder).

4. Install ui lib dependencies: `yarn add zod zustand` & `npx expo install @react-native-async-storage/async-storage`

5. Copy UI Lib [lib/ui](lib/ui/) folder into your project root.

6. Copy [assets/fonts/](assets/fonts/) to your project.

7. Update your root layout with [app/\_layout.tsx](app/_layout.tsx) contents. Feel free to add/change "Root Layout" block, but keep ThemeProvider wrapping your entire app.

## TODO-List

Components:

- Calendar

Dialogs:

- Datepicker

ScrollBar:

- Check google apps;

- Image (really needed? react-native image has any problem? is it replaceable by expo-image? if so, replace react-native image in the entire project)

Create a screen with Fullscreen wrapper (e.g. login form). Check for keyboardawarescroll need.

Add real links to main-menu.

Add App screenshots to readme :)
