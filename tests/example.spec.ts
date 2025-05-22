import { test, expect } from '@playwright/test';


test.describe('My First Test Suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
        });

    test('getbyrole', async ({ page }) => { 
      await page.getByRole('button', { name: 'Primary Action' }).click();
      await page.getByRole('textbox', { name: 'username' }).fill('testuser');
      await page.getByRole('checkbox', { name: 'Accept terms' }).click();
  });

   test('getbytext', async ({ page }) => { 

    await page.getByText('Submit Form').click();
    // ...existing code...
await page.getByText('important text that you').evaluate(el => el.innerHTML = 'WEWEWEWEE');
// ...existing code...
    await page.getByText('List item 2 with link').click();
  });

     test('getbylabel', async ({ page }) => { 

      await page.screenshot({ path: 'screenshot.png' });
    await page.getByLabel('Express').check(); 
          await page.screenshot({ path: 'screenshot2.png' });

    page.waitForTimeout(5000);
    await page.getByLabel('Express').uncheck();
          await page.screenshot({ path: 'screenshot3.png' });

    // ...existing code...
  });

});

