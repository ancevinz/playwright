import test from "@playwright/test";
test('Locators test',async({page})=>{
await page.goto("https://selenium.qabible.in/simple-form-demo.php");
await page.locator("#message-one");
await page.locator(".form-control").nth(0);
await page.locator("button[id='button-one']");
await page.locator("#value-a");
await page.locator("#value-b");
await page.locator("button[id='button-two']");
await page.locator("/html/body/section/div/div/div[2]/div[2]/div/div[2]/form/div[3]")
await page.getByLabel("Select Color");
await page.getByText("Show Message");
await page.getByPlaceholder("Please enter your Message");
await page.getByPlaceholder("Enter Value").nth(1);
await page.getByRole("button", { name: "Show Message" });




//console.log(await page.title())
});
