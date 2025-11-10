# OOGLON UI

OOGLON UI Lib for React Native.

## Usage

1. Create a new Expo project: `yarn create expo --template`

2. Select template `Navigation (TypeScript) - File-based routing with TypeScript enabled`

3. Clean it (remove components, constants, app/\* and every non-essential folder).

4. Copy UI Lib [lib/ui](lib/ui/) folder into your project root.

5. Copy [assets/fonts/](assets/fonts/) to your project.

6. Update your root layout with [app/\_layout.tsx](app/_layout.tsx) contents. Feel free to add/change "Root Layout" block, but keep ThemeProvider wrapping your entire app.

## TODO-List

Components:

- [WIP] Card
- Input
- CheckBox
- Dialog
- [WIP] Badge
- Image (really needed? react-native image has any problem? is it replaceable by expo-image? if so, replace react-native image in the entire project)

Add real links to main-menu.

Adjust default-theme background and foreground colors (search for a good design as reference).

Confirm if fontFamily is being applied for iOS.

Add App screenshots to readme :)
