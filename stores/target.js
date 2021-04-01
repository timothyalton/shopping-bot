const puppeteer = require('puppeteer');

async function target() {
    
    let url = 'https://www.target.com/p/playstation-5-console/-/A-81114595#lnk=sametab'
    // let url = 'https://www.target.com/p/dualshock-4-wireless-controller-for-playstation-4/-/A-80038084?preselect=14632006#lnk=sametab'

    let browser = await puppeteer.launch();
    let page = await browser.newPage();

    await page.goto(url, {waitUntil: 'networkidle0'});

    let data = await page.evaluate(() => {

        let available = document.querySelector('div[class="styles__BaseWrapper-sc-11r1it6-0 styles__SoldOutWrapper-hphbrb-0 fIHckm gKslGC"] > div') ? document.querySelector('div[class="styles__BaseWrapper-sc-11r1it6-0 styles__SoldOutWrapper-hphbrb-0 fIHckm gKslGC"] > div').innerText : "In Stock"

        return {
            available
        }


    })
    await browser.close();
    console.log(`The PS5 is ${data.available} at Target`);
};

module.exports.target = target;