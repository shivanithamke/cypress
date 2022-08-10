const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "chromeWebSecurity": false,
    "experimentalSessionAndOrigin": true,
    watchForFileChanges:false,
    defaultCommandTimeout:10000,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
   
  },
});
