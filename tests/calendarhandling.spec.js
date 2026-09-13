import { test } from '@playwright/test';

test('@smoke calendar handling test', async ({ page }) => {

    await page.goto("https://selenium.qabible.in/date-picker.php");

    await page.locator("#single-input-field").click();

    const tableLocator = page.locator("//table[@class='table-condensed']").nth(0);

    await tableLocator.locator("xpath=.//tbody/tr[1]/td[2]").click();

    await page.waitForTimeout(2000);
});