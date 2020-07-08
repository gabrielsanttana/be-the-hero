<div align="center">
  <img src="https://raw.githubusercontent.com/gabrielsanttana/be-the-hero/24bdfa7c62d3e010475d18d1383cd260d3ed9a1a/front-end/src/assets/logo.svg" height="140" width="140"/>
</div>

#####

<img src="./assets/web_homepage.png" />

<h4 align="center">An application where non-governmental organizations can post their incidents so that people can help 🦸‍♂️</h4>

## 🛠️ Technologies

<ul>
  <li><a href="https://nodejs.org/en/">Node.js</a></li>
  <li><a href="https://expressjs.com/">Express</a></li>
  <li><a href="https://reactjs.org/">React</a></li>
  <li><a href="https://reactnative.dev/">React Native</a></li>
  <li><a href="https://expo.io/">Expo</a></li>
  <li><a href="https://www.sqlite.org/index.html">SQLite</a></li>
  <li><a href="http://knexjs.org/">Knex.js</a></li>
  <li><a href="https://socket.o/">Socket.IO</a></li>
  <li><a href="https://github.com/arb/celebrate">Celebrate.js</a></li>
  <li><a href="https://jestjs.io/">Jest</a></li>
</ul>

## ⚙️ Requirements

<ul>
  <li><a href="https://nodejs.org/en/">Node.js</a></li>
  <li><a href="https://www.npmjs.com/">NPM</a></li>
  <li><a href="https://expo.io/">Expo</a></li>
  <li><a href="https://expo.io/">Expo CLI</a></li>
</ul>

## 🚀 Installation

```bash
$ git clone https://github.com/gabrielsanttana/be-the-hero
```

### 🗄️ API
```bash
$ cd be-the-hero/backend
$ npm install
$ npm run migrate
$ npm start
```

The API will start running on http://localhost:3333

### 💻 Web

```bash
$ cd be-the-hero/frontend
$ npm install
$ npm start 
```

The application will pop-up in the browser on http://localhost:3000

### 📱 Mobile

It's also necessary to have an React Native Expo environment setup and the Expo mobile app installed on your smartphone.
It's important that both the smartphone and the computer are connected to the same network and to type the local IP address on the baseURL in the `api.js` file;

Example:

```
const api = axios.create({
  baseURL: 'http://000.000.00.000:3333',
});
```

With that:

```bash
$ cd be-the-hero/mobile
$ npm install -g expo-cli
$ npm install
$ npm start
```

<p>A new window with application log will open in the browser</p>
<p>Then, you can simply load the app by scanning the QR code with the Expo mobile app or by using the local URL</p>

## ⚖️ License

[MIT License](https://github.com/gabrielsanttana/be-the-hero/blob/master/LICENSE)

