const puppeteer = require('puppeteer');
const { target } = require('./stores/target');
const { newegg } = require('./stores/newegg');
const { walmart } = require('./stores/walmart');



(async () => {

await target();
await newegg();
await walmart();

// console.log(module)

})();
