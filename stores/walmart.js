const puppeteer = require('puppeteer');

async function walmart() {
    

    let url = 'https://www.walmart.com/ip/Sony-PlayStation-4-1TB-Slim-Gaming-Console/101507200'


    let browser = await puppeteer.launch();
    let page = await browser.newPage();

    await page.setExtraHTTPHeaders({
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36'
    });

    await page.goto(url, {waitUntil: 'networkidle0'});

    let data = await page.evaluate(() => {

        let available = document.querySelector('#add-on-atc-container > div > section > div > div[class="prod-product-cta-add-to-cart display-inline-block"] > button > span').innerText


        return {
            available
        }


    })
    await browser.close();
    console.log(`The PS5 is ${data.available} at Walmart`);
};

module.exports.walmart = walmart;