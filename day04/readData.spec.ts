import {test} from "@playwright/test";
import {parse} from 'csv-parse/sync'
import fs from 'fs'
import path from 'path'


const records=parse(fs.readFileSync(path.join(__dirname,'loginData.csv')),{
    columns:true,
    skip_empty_lines: true
})
for(const record of records){
test(`Learning to read CSV files ${record.testcase}` ,async({page})=>{
       
         await page.goto("http://leaftaps.com/opentaps/control/main");

         //await page.fill("#username","demoSalesManager");
       // const credentials= page.locator("[class='inputLogin']");
        await page.fill("#username",record.username);
        await page.fill("#password",record.password);
        await page.click(".decorativeSubmit");
       // await page.click("text=CRM/SFA");
        await page.click("//a[contains(text(),'CRM/SFA')]");        
        console.log(await page.title());        

})}




