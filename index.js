var app = require("express")();
var http = require("http").Server(app);
const PORT = 8888;
const puppeteer = require("puppeteer");

http.listen(PORT, function () {
    console.log(`Application start at port ${PORT}`);
});

const getJobs = async () => {
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
    const jobs = await page.evaluate(() =>
        [...document.querySelectorAll(".post-template")].map(({ children }) => {
            const date = children[1].textContent
                .replaceAll("\n", " ")
                .replaceAll("\t", "")
                .trim();

            const title = children[2].children[0].textContent
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

    return jobs;
};

app.get("/", async function (req, res) {
    const jobs = await getJobs();
    res.send(jobs);
});
