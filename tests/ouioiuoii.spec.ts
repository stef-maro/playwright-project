import { test , expect } from '@playwright/test';



    test('clock', async ({ page }) => { 
      await page.goto('https://www.timeanddate.com/worldclock/france/paris');
      await page.clock.install();
      await page.clock.runFor(10000)
  });

