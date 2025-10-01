import { test, expect } from '@playwright/test';

test('Basic actions', async ({ page }) => {

    await test.step('Step navigate', async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step('Step click', async () => {
        //await page.locator("//td/a[contains(@href,'01-xpath-register-page.html')]").click();
        await page.locator("//td/a[normalize-space(@href)='01-xpath-register-page.html']").click();

    });

    await test.step('Step input', async () => {
        await page.locator("//input[@id='username']").fill("Anh Tran");
        await page.locator("//input[@id='email']").pressSequentially("duyanh0112@gmail.com", { delay: 200 });
    });

    await test.step('Step radio button/checkbox', async () => {
        await page.locator("//input[@id='male']").check();
        const isCheckedMale = await page.locator("//input[@id='male']").isChecked();
        console.log(isCheckedMale);
    });

    await test.step('Step select option', async () => {
        await page.locator("//select[@id='country']").selectOption("Canada");
        await page.locator("//input[@type='file']").setInputFiles("tests/data-test/data-test.txt");
    });
});