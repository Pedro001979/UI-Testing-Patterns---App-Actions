const { defineConfig } = require("cypress");
const webpack = require('@cypress/webpack-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  on('file:preprocessor', webpack({
    webpackOptions: {
      resolve: {
        extensions: ['.js', '.ts', '.feature']
      },
      module: {
        rules: [
          {
            test: /\.feature$/,
            use: [
              {
                loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                options: config,
              },
            ],
          },
         {
  test: /\.js$/,
  exclude: [/node_modules/],
  // Esta linha é crucial para resolver o erro de 'sourceType: module'
  type: 'javascript/auto', 
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  ],
},
        ],
      },
    },
  }));

  return config;
}

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    specPattern: '**/*.feature',
    setupNodeEvents
  },
});