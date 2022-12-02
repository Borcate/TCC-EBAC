const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1324,
  viewportHeight: 768,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },


});
