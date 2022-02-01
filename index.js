import { launch } from 'puppeteer';
const msgCount = 15; 

(async function main(){

    //Exeptional Handling
    try{
        //initiating up the library
        const _browser = await puppeteer.launch({ headless: false});
        const pages = await _browser.newPage();
        await pages.setUserAgent
        {
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88"
        };

        //Whatsapp navigation using Puppeteer's goto(..) funtion
        await pages.goto("https://web.whatsapp.com/");
        await pages.waitForSelector("._1MXsz");
        await delay(5000);

        //Contact placeholder
        const whatsappNumber = "Tebogo";
        await pages.click(`span[title= '$(whatsappNumber)']`);
        await pages.waitForSelector("._3uMse");
        const _cursor = await pages.$("dev[data-tab'1']");
        await _cursor.focus();

        var ind;
        for (ind = 0; ind < msgCount; ++ind){

            await pages.evaluate(() => {
                const _text = "Head's up! there's a zoom meeting @14:00";
                
             document.execCommand("insertText", false, _text);
            });
            const _cursor = await pages.$("span[data-testid'send']");
            await delay(5000);
        }
    }
    catch(error){
        console.log(error);
    }
})();