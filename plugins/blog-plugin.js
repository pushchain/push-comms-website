// ./custom-blog-plugin.js

const blogPluginExports = require('@docusaurus/plugin-content-blog');

const defaultBlogPlugin = blogPluginExports.default;

async function blogPluginExtended(...pluginArgs) {
  const blogPluginInstance = await defaultBlogPlugin(...pluginArgs);

  // const pluginOptions = pluginArgs[1];

  return {
    // Add all properties of the default blog plugin so existing functionality is preserved
    ...blogPluginInstance,
    /**
     * Override the default `contentLoaded` hook to access blog posts data
     */
    contentLoaded: async function (params) {
      const { actions } = params;

      // Get the 4 latest blog posts

      actions.addRoute({
        // Add route for the home page
        path: process.env.GITHUB_ACTIONS
          ? `${process.env.REACT_APP_BASE_URL}`
          : '/',
        exact: true,

        // The component to use for the "Home" page route
        component: '../src/pages/home.tsx',
      });

      // Call the default overridden `contentLoaded` implementation
      return blogPluginInstance.contentLoaded(params);
    },
  };
}

module.exports = {
  ...blogPluginExports,
  default: blogPluginExtended,
};
