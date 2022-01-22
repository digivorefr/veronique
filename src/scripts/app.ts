interface ExtendedNodeModule extends NodeModule {
  hot: { accept: () => void };
}

// Requiring scss will include it in the Webpack's bundle process.
require('./../styles/index.scss')

console.log('I am a successfully bundled script !');

// Enables Hot Module Rendering.
if ((module as ExtendedNodeModule).hot) {
  (module as ExtendedNodeModule).hot.accept();
}