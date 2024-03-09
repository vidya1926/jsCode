import { test ,expect} from '@playwright/test'
import path from 'path';

test('UploadFiles', async ({ page, context }) => {

    await page.goto("https://www.leafground.com/file.xhtml");

    
    await page.setInputFiles("input[type='file']",'./uploadfiles/Week2day2.md');
    await page.waitForTimeout(3000)

const filePromise=page.waitForEvent('filechooser');
 await page.locator("[class$='ui-icon-plusthick']").last().click();
const file=await filePromise;
await file.setFiles(["./uploadfiles/elements.jpg","./uploadfiles/elements.jpg"]);
await page.waitForTimeout(3000)


})

test.only('Download files',async({page})=>{
  await page.goto("https://leafground.com/file.xhtml");
  const downloadPromise=page.waitForEvent('download');
  await page.getByRole('button', { name: 'Download' }).click();
  const downloadFile=await downloadPromise;
  await downloadFile.saveAs("downloads/"+downloadFile.suggestedFilename());

  




})