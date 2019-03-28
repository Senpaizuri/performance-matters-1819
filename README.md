# OBA Musicfinder[🔥 Enhanced Edition 🔥]

## Running the App

To run the app locally you can Clone this repo

```bash
    git clone https://github.com/Senpaizuri/performance-matters-1819.git
```

Next, you should run this line to start the app. ez pz lemon squeezy 🍋

```bash
    npm i && npm start
```
## NPM Scrips

This build includes a few npm scripts

```json
    "scripts": {
        "start": "gulp build && node server.js",
        "minimize": "gulp build",
        "expose": "npx ngrok http 3000"
    }
```

* *start* -> Builds new files to the "/opt/" directory and boots the node server
* *minimize* -> Build new files
* *expose* -> Exposes the localhost:3000 to an online IP with NGROK easier online testing and tooling

## Serverside Node

The Node server runs with [Express.js 🚅](https://expressjs.com/) and handles the templating with [handlebars 👨🏻](https://handlebarsjs.com/)
Furthermore, [Gulp 🍹](https://gulpjs.com/) is used for tooling.

[Gulp 🍹](https://gulpjs.com/) handles the building of minimized files.
[Gulp 🍹](https://gulpjs.com/) has a few extra dependencies within.
Namely `CSSNANO` and `Uglify` to help minify the css and js respectively.

# Optimizations 🏃🏻

> Sonic is my name, Speeds my game 🏃🏻 - Sonic 20XX

The app itself was pretty slow.
Namely Bad loadtimes with regards to fonts and api calls.
The original demo can be found [here](https://senpaizuri.github.io/project-1-1819/).

The app was rendered almost exclusively on the client.
This caused some mayor perfomance issues on slower connections.

With a first paint at __1s__ ,first meaningfull paint after __16.7__ seconds and a recorde speed index of __18s__ 😅

![Audit screenshot with horrible loadtimes](./screenshots/audit[slow].png)

## Step 1 - ServerSide Rendering 💻

I started out with server side rending.
Let all "heavy lifting" 🏋🏻‍ be done serverside.

This change alone showed reasonable improvements.




<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- Add a nice image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
