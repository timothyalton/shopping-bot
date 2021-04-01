const puppeteer = require('puppeteer');

    
async function newegg(){

    let url = 'https://www.newegg.com/p/N82E16868110291?Description=playstation%205&cm_re=playstation_5-_-68-110-291-_-Product&quicklink=true'
    // let url = 'https://www.newegg.com/p/N82E16874103696'
    let browser = await puppeteer.launch();
    let page = await browser.newPage();

    await page.goto(url, {waitUntil: 'networkidle0'});

    let data = await page.evaluate(() => {

        let available = document.querySelector('button[class="btn btn-primary btn-wide"]') && document.querySelector('button[class="btn btn-primary btn-wide"]').innerText === "ADD TO CART " ? "In Stock" : "Out of Stock"

        return {
            available
        }


    })
    await browser.close();
    console.log(`The PS5 is ${data.available} at Newegg.com`);
};

module.exports.newegg = newegg;