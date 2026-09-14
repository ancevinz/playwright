import test from '@playwright/test';
test('webdialogue test', async ({ page }) => {
    await page.goto("https://selenium.qabible.in/alert.php");
    await page.getByRole('button', { name: 'Alert Box' }).click();
    await page.waitForTimeout(2000);
    page.on('dialog', dialog => {
        console.log(dialog.message());
        dialog.accept();
    });
});