import { test, expect } from '@playwright/test';

test('Basic actions', async ({ page }) => {

    await test.step('Step navigate', async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step('Step click Product page', async () => {
        await page.locator("//td/a[normalize-space(@href)='02-xpath-product-page.html']").click();

    });

    await test.step('Step thêm sản phầm vào giỏ hàng', async () => {
        //await page.locator("//div[contains(@class, 'product-name') and contains(normalize-space(), 'Product 1')]/following-sibling::button[contains(@class, 'add-to-cart')]").click();
        //div[@class="product-name" and contains(.,'Product 1')]/../button[@class="add-to-cart"]
        const productSelector1 = "//div[contains(@class, 'product-name') and contains(normalize-space(), 'Product 1')]/following-sibling::button[contains(@class, 'add-to-cart')]";
        await page.locator(productSelector1).click();
        await page.locator(productSelector1).click();
        const productSelector2 = "//div[contains(@class, 'product-name') and contains(normalize-space(), 'Product 2')]/following-sibling::button[contains(@class, 'add-to-cart')]";
        await page.locator(productSelector2).click();
        await page.locator(productSelector2).click();
        await page.locator(productSelector2).click();
        const productSelector3 = "//div[contains(@class, 'product-name') and contains(normalize-space(), 'Product 3')]/following-sibling::button[contains(@class, 'add-to-cart')]";
        await page.locator(productSelector3).click();
    });
});