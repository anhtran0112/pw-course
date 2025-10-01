import { test, expect } from '@playwright/test';

test('Basic actions', async ({ page }) => {

    await test.step('Step navigate', async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step('Step click Todo page', async () => {
        await page.locator("//td/a[normalize-space(@href)='03-xpath-todo-list.html']").click();

    });

    await test.step('Step thêm task', async () => {
        for (let i = 1; i <= 100; i++) {
        await page.locator("//input[@id='new-task']").fill(`Playwrightvn Task ${i}`);
        await page.locator("//button[@id='add-task']").click();
        await page.waitForTimeout(100);
    }
    });

    await test.step('Step xóa task lẻ', async () => {
        for (let i = 1; i <= 100; i+=2) {
        await page.locator(`//li[${i}]//button[@id='playwrightvn-task-${i}-delete']`).click();
        await page.waitForTimeout(500);
        // BUG
    }

    });  
    
});