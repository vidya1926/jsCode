import { test } from '@playwright/test'


test('Handling multiPages', async ({ page, context }) => {

    await page.goto("https://www.leafground.com/window.xhtml");

    const winPromise = context.waitForEvent('page');
    await page.getByText('Open', { exact: true }).click();
    const newPage = await winPromise;
    console.log(newPage.url());

})
test('Handling multiTabs', async ({ page, context }) => {

    await page.goto("https://www.leafground.com/window.xhtml");

    const [multitabs] = await Promise.all([
        context.waitForEvent('page'),
        page.getByText('Open Multiple', { exact: true }).click()
    ])
    const tabs = multitabs.context().pages();
    console.log(tabs.length);

    tabs.forEach(tab => {
        console.log(tab.url())
    })
    let webPage:any;
    for (let i = 0; i < tabs.length; i++) {
        const title = await tabs[i].title();
        console.log(title);
        if (title === "Dashboard") {
            webPage = tabs[i];
        }      
    }
    const menu= webPage.click("#menu-button");
    await page.waitForTimeout(4000);
})


