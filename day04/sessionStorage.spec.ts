
import{test} from '@playwright/test'
test.use({storageState: "creds/lt-login-storage.json"})
test(`Learning to read env files ` ,async({page})=>{
        await page.click("//a[contains(text(),'CRM/SFA')]");        
console.log(await page.title());    
        await page.getByText("Leads",{exact:true}).click();

})