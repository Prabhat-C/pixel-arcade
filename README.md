# Pixel Arcade (web)

Fourteen tiny pixel games that run in any modern browser: Dragon Run,
Dragon Run 2, Two-player race, Cave flyer, Gravity flip, Pixel copter,
Stack tower, Snake, Breakout, Asteroids-lite, Pixel invaders, 2048 dragon
egg, Cactus sweeper and Memory match.

Plain HTML + JavaScript: no build step, no libraries, nothing to install.

## Put it on GitHub Pages

1. Push **all the files in this folder** to a GitHub repository, either at
   the top level of the repo or inside a `docs/` folder.
2. On GitHub, open the repo → **Settings** → **Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**,
   pick your branch (e.g. `main`) and the folder (`/ (root)` or `/docs`),
   then press **Save**.
4. After a minute or two the site is live at
   `https://<your-username>.github.io/<repo-name>/`
   (the Pages settings screen shows the exact link).

GitHub Pages is free for public repositories. Private repositories need a
paid GitHub plan to use Pages.

## Playing

- **Phone / tablet:** play in landscape. Tap, hold and swipe like the
  Android app. Use your browser's **Add to Home Screen** option to get an
  app icon that opens full-screen.
- **Computer:** click instead of tapping. Keyboard: **Space** = tap,
  **arrow keys** = swipe / move, **F** = fireball in Dragon Run 2,
  **W** / **↑** = jump for player 1 / 2 in Two-player race,
  **Esc** = back to the menu.
- **Offline:** after the first visit the arcade keeps working without
  internet (it's cached by `sw.js`).
- High scores are saved in the browser on each device.

## Updating

When you change any file, also change `VERSION` at the top of `sw.js`
(e.g. `pixel-arcade-v2`), so returning players get the new version instead
of the cached one.

## Files

| File | What it is |
|---|---|
| `index.html` | The page that loads everything |
| `core.js` | Shared engine: drawing, touch/mouse/keyboard input, sound, menu, high scores |
| `g_*.js` | One file per game (`g_dragon.js` holds all three Dragon Run games) |
| `sw.js` | Offline caching |
| `manifest.webmanifest`, `icon*.png`, `icon.svg` | App name and icons for "Add to Home Screen" |
