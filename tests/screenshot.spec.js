import { test, expect } from '@playwright/test';

test('@smoke screenshot test', async ({ page }) => {
    await page.goto("https://selenium.qabible.in/");

    await page.screenshot({
        path: "screenshot/screenshot.png"
    });

    //expect(await page.screenshot()).toMatchSnapshot(
       // 'obsqura.png',
     //   { threshold: 0.2 }
    //);
});
