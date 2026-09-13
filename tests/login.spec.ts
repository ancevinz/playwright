import { test, expect } from '@playwright/test';
import type { Page } from '@playwright/test';
import LoginPage from '../pages-ts/login.page.js';
test('page playwright test', async ({ page }: { page: Page }) => {
    const loginPage = new LoginPage(page);
    await page.goto("https://www.saucedemo.com/");
    await loginPage.usernamefill("standard_user");
    await loginPage.passwordfill("secret_sauce");
    await loginPage.clickLoginButton();
    await expect(page).toHaveURL(
        "https://www.saucedemo.com/inventory.html"
    );
    /*await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();
    expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");*/
});