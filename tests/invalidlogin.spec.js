import { test, expect } from "@playwright/test";
import Loginpage from "../pages/loginpage.js";
import dataset from "../utils/parameterizedTestData.json" with { type: "json" };

for (const data of dataset) {

    test(`invalid user for ${data.username}, ${data.password}`, async ({ page }) => {



        await page.goto("https://www.saucedemo.com/");
        const loginPage = new Loginpage(page);

        let usernamevalue = data.username;
        let passwordvalue = data.password;

        await loginPage.enterUsername(usernamevalue);
        await loginPage.enterPassword(passwordvalue);
        await loginPage.clickLogin();
    });
}