import { test, expect } from '@playwright/test';

test('Basic actions', async ({ page }) => {

    await test.step('Step navigate', async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step('Step click', async () => {
        await page.locator("//td/a[normalize-space(@href)='01-xpath-register-page.html']").click();

    });

    await test.step('Step input data for User Registrasion form', async () => {
        await page.locator("//input[@id='username']").fill("Anh Tran");
        await page.locator("//input[@id='email']").pressSequentially("duyanh0112@gmail.com", { delay: 200 });
        await page.locator("//input[@id='male']").check();
        await page.locator("//input[@id='reading']").check();
        await page.locator("//select[@id='interests']").selectOption('Sports');
        await page.locator("//select[@id='country']").selectOption("Canada");
        await page.locator("//input[@id='dob']").type("10/01/2025");
        await page.locator("//textarea[@id='bio']").fill("Playwrightvn");
        await page.locator("//input[@id='rating']").fill("8");
        //await page.locator("//input[@id='favcolor']").fill("rgb(255, 124, 50)");
        await page.locator("//input[@id='favcolor']").fill("#ff7c32");
        await page.locator("//input[@id='newsletter']").check();
        //await page.locator("//input[@id='toggleOption']").click({ position: { x: 10, y: 10 } });
        await page.locator("//span[@class='slider round']").click();
        //await page.locator("//div[@id='starRating']").check();
        await page.locator("//input[@type='file']").setInputFiles("tests/data-test/data-test.txt");
        
        const starRating = page.locator("#starRating");
        const starValue = page.locator("#starRatingValue");
        await starRating.evaluate((element) => {
            element.setAttribute('data-rating', '4.5');
            element.style.setProperty('--rating-width', '90%');
        });
        await starValue.evaluate((element, newValue) => {
            element.textContent = newValue;
        }, '4.5');
        // await page.locator("//input[@id='customDate']").type("09/02/2025");
    });
});