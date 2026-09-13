import test from "@playwright/test";

test('checkbox demo', async ({ page }) => {
  await page.goto("https://selenium.qabible.in/check-box-demo.php");

  await page.locator("#check-box-one").click();
  await page.waitForTimeout(2000);
  console.log(await page.locator("#check-box-two").isChecked());
  console.log(await page.locator("#check-box-one").isChecked());
  console.log(await page.locator("#check-box-one").isVisible());
});

test('radio button demo', async ({ page }) => {
  await page.goto("https://selenium.qabible.in/radio-button-demo.php");
  await page.getByLabel("Male").first().click();
  await page.waitForTimeout(2000);
  console.log(await page.getByLabel("Male").first().isEnabled());
  console.log(await page.getByLabel("Male").first().isDisabled());
});

test.only('dropdowns', async ({page}) => {
await page.goto("https://selenium.qabible.in/select-input.php");
const dropdown = await page.locator("#single-input-field");
await dropdown.selectOption({index: 1});
await page.waitForTimeout(2000);
await dropdown.selectOption({value:"Yellow"});
await page.waitForTimeout(2000);
await dropdown.selectOption({label:"Green"});
await page.waitForTimeout(2000);
await page.waitForLoadState('networkidle'); 
});