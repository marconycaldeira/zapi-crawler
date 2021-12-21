/**
 * @name get list of links
 *
 * @desc Scrapes Hacker News for links on the home page and returns the top 10
 */
const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch({
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.tracing.start({
        path: "trace.json",
        categories: ["devtools.timeline"],
    });
    
    await page.goto(
        "https://www.agrobase.com.br/oportunidades/vagas/emprego-engenheiro-alimentos/"
    );
    const texts = await page.evaluate(() =>
        [...document.querySelectorAll(".post-template")].map(({ children }) => {
            const date = children[1].textContent
                .replaceAll("\n", " ")
                .replaceAll("\t", "")
                .trim();

            const title = children[2].textContent
                .replaceAll("\n", " ")
                .replaceAll("\t", "")
                .trim();

            const link = children[2].children[0].children[0].href;

            return {
                date: date,
                title: title,
                link: link,
            };
        })
    );

    await page.tracing.stop();
    await browser.close();

    return texts
})();
