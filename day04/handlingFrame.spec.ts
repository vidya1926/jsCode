import { test } from '@playwright/test'


test('Handling frames', async ({ page }) => {

    await page.goto("https://www.leafground.com/frame.xhtml");

    // const frameEle = page.frameLocator("//iframe").first();
    // const clickMe = frameEle.locator("#Click");  
    // console.log(await clickMe.innerText());  
    // await clickMe.click();
    // console.log(await clickMe.innerText());
    // await page.waitForTimeout(3000);
    const frameEle = page.frameLocator("//iframe").nth(2);
    const nestedFrame= frameEle.frameLocator('//iframe');
    const clickMe = nestedFrame.locator("#Click");  
    console.log(await clickMe.innerText());  
    await clickMe.click();
    console.log(await clickMe.innerText());
    await page.waitForTimeout(3000);
})


