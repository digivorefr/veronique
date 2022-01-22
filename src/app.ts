/** https://blogs.infinitesquare.com/posts/web/debuter-un-projet-avec-vuejs-typescript-et-webpack */


// Webpack HMR interface.
interface ExtendedNodeModule extends NodeModule {
  hot: { accept: () => void };
}

console.log('COUCOU MEC :) !');

// Enables Hot Module Rendering.
if ((module as ExtendedNodeModule).hot) {
  (module as ExtendedNodeModule).hot.accept();
}