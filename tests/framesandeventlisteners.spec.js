import test from '@playwright/test';
test('frames and event listeners test', async ({ page }) => {
    await page.goto("https://demoqa.com/frames");
    const framePage = page.frameLocator("#frame1");
    console.log(await framePage.locator("#sampleHeading").textContent());
    await page.pause();
});


test.only('mouseactions', async ({ page }) => {
    await page.goto("https://selenium.qabible.in/");
    const mouseHover = page.getByText("Home");
    await mouseHover.hover();
    await mouseHover.click({ button: 'right' });
    await page.waitForTimeout(5000);
    await page.mouse.down();
    await page.mouse.move(100, 100);
});