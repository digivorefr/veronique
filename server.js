const fs = require('fs-extra');
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');


// const compilerCallback = (error, result) => {
//   console.log('Files updated');
// }





const port = 5000;

const server = express();
const compiler = webpack(config);

fs.remove(config.output.path)
.then(() => {

  const devMiddleware = webpackDevMiddleware(compiler, {
    // index: 'index.html',
    // headers: {
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    // },
    publicPath: '/assets',
  });
  devMiddleware.waitUntilValid(() => {
    console.log(`\n\x1B[0m\x1B[32m\x1B[1m ✔️ Dev server is listening at http://localhost:${port} \x1B[0m\n`);
  });
  server.use(devMiddleware);

  // `webpack-hot-middleware` package enables HMR, along with a dev server.
  server.use(webpackHotMiddleware(compiler, {
    path: '/__webpack_hmr',
    heartbeat: 2000,
  }));

  // Serves all static assets.
  server.use(express.static(path.resolve(config.output.path, '..')));

  // Catch-all to redirect any request to the main entry point (index.html).
  server.get('*', (_request, response, next) => {
    const filePath = path.resolve('./dist/', 'index.html');
    compiler.outputFileSystem.readFile(filePath, (error, content) => {
      if (error !== null) {
        next(error);
      } else {
        response.set('content-type', 'text/html');
        response.send(content);
        response.end();
      }
    });
  });

  server.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
})
.catch((error) => {
  console.error('Compilation failed :');
  console.error(error.message);
})