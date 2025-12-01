# OOGLON UI

OOGLON UI Lib for React Native.

## Usage

1. Create a new Expo project: `yarn create expo --template`

2. Select template `Navigation (TypeScript) - File-based routing with TypeScript enabled`

3. Clean it (remove components, constants, app/\* and every non-essential folder).

4. Install ui lib dependencies: `yarn add zod zustand`

5. Copy UI Lib [lib/ui](lib/ui/) folder into your project root.

6. Copy [assets/fonts/](assets/fonts/) to your project.

7. Update your root layout with [app/\_layout.tsx](app/_layout.tsx) contents. Feel free to add/change "Root Layout" block, but keep ThemeProvider wrapping your entire app.

## TODO-List

Theme:

- Refactor theme object to avoid colorScheme check on makeStyles.

colors.primary.asBackground()
colors.red() //default shades
colors.red().shaded(6,2)
colors.red.asBackground() colors.red.asForeground()

colors.forScheme("white", ["dark", 4])
colors.forScheme(["lime", 2], ["dark", 3])
colors.forScheme("#AA22DD", "rgb(123,123,200)")

colors.bg.default()
colors.bg.primary()
colors.bg.red()
colors.fg.red() //default shades
colors.fg.red(6,2)

color("red").foreground //default fg shade
color("red").background //default bg shade
color("red").shade(6,2) // lightShade 6, darkShade 2

theme.spacing("md")
theme.radius(), theme.radius("xs")

theme na raiz de makeStyles!

rename fontSize to defaultFontSize on base theme

revise default-theme format, implement optional override (avoid nested fields?)

Components:

- Calendar

Dialogs:

- Datepicker
- ImagePicker

ScrollBar:

- Check google apps;

- Image (really needed? react-native image has any problem? is it replaceable by expo-image? if so, replace react-native image in the entire project)

isArrayOfStrings is duplicated.

Create a screen with Fullscreen wrapper (e.g. login form). Check for keyboardawarescroll need.

Persist colorScheme in theme provider.

Add real links to main-menu.

Confirm if fontFamily is being applied for iOS.

Add App screenshots to readme :)
