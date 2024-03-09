import{test} from '@playwright/test'


test('Handling alerts', async({page})=>{

 await page.goto("https://www.leafground.com/alert.xhtml");

   page.once('dialog',async alertMsg=>{
        console.log(alertMsg.type());
            alertMsg.accept();
          })
 await page.getByText("Show").nth(0).click(); 
 await page.getByText("Show").nth(1).click();
 
 page.once('dialog',async alertMsg=>{
    console.log(alertMsg.type());
        alertMsg.dismiss();
      })
 await page.locator(".card",{hasText:" Alert (Prompt Dialog"}).
 locator("button").filter({hasText:'Show'}).click();
 await page.waitForTimeout(3000);
})


