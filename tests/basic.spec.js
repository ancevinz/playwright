import test from "@playwright/test";
test('basic playwright test',async({page})=>{
await page.goto("https://news.google.com/home?hl=en-IN&gl=IN&ceid=IN:en")
console.log(await page.title())
});


test.only('selnium browser', async({page})=>{
await page.goto("http://selenium.qabible.in/")
console.log(await page.title())
});