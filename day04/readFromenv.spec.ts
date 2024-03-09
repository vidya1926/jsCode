import {test} from "@playwright/test";
import dotenv from 'dotenv';
dotenv.config();


test(`Learning to read env files ` ,async({page})=>{
    const uname= process.env.LT_USERNAME as string;
const pwd= process.env.LT_PASSWORD as string;
await page.goto("http://leaftaps.com/opentaps/control/main"); 
await page.locator("#username").fill(uname);
await page.fill("#password",pwd);
await page.click(".decorativeSubmit");  

await page.context().storageState({path:"creds/lt-login-storage.json"})

})


