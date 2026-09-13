import test from "@playwright/test";

test('web commands', async ({ page }) => {
  await page.goto("https://selenium.qabible.in/simple-form-demo.php");

  await page.locator("#single-input-field").fill("Hello World");
  await page.locator("#button-one").click();

  await page.locator("#value-a").fill("5");
  await page.locator("#value-b").fill("4");
  await page.locator("#button-two").click();

  await page.waitForTimeout(2000);

  console.log(await page.locator("#message-one").textContent());
});