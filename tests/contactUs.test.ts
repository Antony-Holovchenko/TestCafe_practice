import * as dotenv from 'dotenv'
dotenv.config()
const baseUrl = process.env.BASE_URL!;
import contactUsForm from "../page-objects/contactUsPage";
const contactUs = new contactUsForm
const firstTestSet = require('../data/contactUsData.json')


fixture `Testing the contact us page`
    .page(baseUrl)
    .beforeEach(async t => {
      //await t.setTestSpeed(0.07)
  })
  let numberOfCallBack = 0
  
  firstTestSet.forEach(data => {
    test.only(data.testName , async t => {
      await numberOfCallBack++
      console.log(numberOfCallBack)

        switch (await numberOfCallBack) {
          case 1:
            await t
                .click(contactUs.contactUsBtn)
                .click(contactUs.messageTheme)
                .click(contactUs.theme1.withText('Customer service'))
                .typeText(contactUs.email, data.email)
                .typeText(contactUs.orderId, data.orderReference)
                .setFilesToUpload(contactUs.fileUpload, [data.attachedFile])
                .typeText(contactUs.message, data.messageText)
                .click(contactUs.sendBtn)
            await t.expect(contactUs.successMessage.innerText).contains(data.expectedresult)
            break;
          
          case 2: 
            await t
                .click(contactUs.contactUsBtn)
                .click(contactUs.messageTheme)
                .click(contactUs.theme1.withText('Webmaster'))
                .typeText(contactUs.email, data.email)
                .typeText(contactUs.orderId, data.orderReference)
                .setFilesToUpload(contactUs.fileUpload, [data.attachedFile])
                .typeText(contactUs.message, data.messageText)
                .click(contactUs.sendBtn)
            await t.expect(contactUs.errorMessage.innerText).contains(data.expectedresult)
            break;    
          
          case 3: 
            await t
                .click(contactUs.contactUsBtn)
                .click(contactUs.messageTheme)
                .click(contactUs.theme1.withText('Customer service'))
                .typeText(contactUs.email, data.email)
                .typeText(contactUs.orderId, data.orderReference)
                .setFilesToUpload(contactUs.fileUpload, [data.attachedFile])
                .click(contactUs.sendBtn)
            await t.expect(contactUs.errorMessage.innerText).contains(data.expectedresult) 
            break;
          
          case 4: 
            await t
                .click(contactUs.contactUsBtn)
                .click(contactUs.messageTheme)
                .click(contactUs.theme1.withText('Webmaster'))
                .typeText(contactUs.orderId, data.orderReference)
                .setFilesToUpload(contactUs.fileUpload, [data.attachedFile])
                .typeText(contactUs.message, data.messageText)
                .click(contactUs.sendBtn)
            await t.expect(contactUs.errorMessage.innerText).contains(data.expectedresult)
            break;  
            
          case 5: 
            await t
                .click(contactUs.contactUsBtn)
                .click(contactUs.messageTheme)
                .click(contactUs.theme1.withText('Customer service'))
                .typeText(contactUs.email, data.email)
                .typeText(contactUs.message, data.messageText)
                .click(contactUs.sendBtn)
            await t.expect(contactUs.successMessage.innerText).contains(data.expectedresult)
            break;  
        }
      });
      
})


