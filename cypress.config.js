const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: "ffj9vu",
  e2e: {
    baseUrl: "http://qamid.tmweb.ru/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
  },
},
});


