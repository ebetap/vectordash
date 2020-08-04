# How to run project locally in development mode.

## you can use `yarn or npm` for package manager.

1. Clone the project repository
2. Open terminal and goto project folder
3. `yarn install`
4. `yarn dev`

# How to generate static HTML Files

1. Clone the project repository
2. Open terminal and goto project folder
3. `yarn install`
4. `yarn deploy` (it will be generate HTML files in `out` folder)
5. Now you can serve the `out` folder using your own web server

# How to add global css files

1. Open file `pages/_app.js` and then just import the css file below `import '../themes/theme.scss'`

# How to add css in specific pages

1. Open `pages/${page_name}/index.js` and then import the css file as usual.

# How to add static images and use it

1. Copy your static images to `static/img` folder
2. Example how to use it `<img src="/static/image_name.png" />`
