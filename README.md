![Space Madness the Boardgame Title](https://robertpage.github.io/space-madness/images/modal-content/title.jpg)

## [DEMO](https://robertpage.github.io/space-madness/)

This is a digital single player version of Space Madness the Board Game that has been changed in a couple of ways to take advantage of the fact that the computer can manage much of the game and setup. There are a couple of minor known cross-browser visual bugs but otherwise it should be completely playable.

## Built using:
- lighterHTML
- Immer and simple code for immutable state management

## Built on:
- 11ty to generate static files
- esbuild to compile JS/TS, and minify
- light-server to run dev server
- SCSS rarely ever used outside of imports
- PostCSS css post processing
-- CSSnano minification
-- Autoprefixer prefixer

## To Run
- npm install
- npm run dev
- navigate to localhost:8000