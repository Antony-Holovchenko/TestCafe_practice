import contactUsForm from "../page-objects/objectsUsual/contactUsPage";
const contactUs = new contactUsForm
const TestSet = require('../data/tests_data/contactUsData.json')
import * as dotenv from 'dotenv'
dotenv.config()
const baseUrl = process.env.BASE_URL!;

fixture `Testing the contact us page`
    .page(baseUrl)
    .beforeEach(async t => {
      //await t.setTestSpeed(0.07)
  })
  
  
  TestSet.forEach(data => {
    test(data.testName , async t => {

        await contactUs.sendValidForm(t, data.email, data.orderReference, data.attachedFile, data.messageText)
        if (await contactUs.errorMessage.exists) {
          await t.expect(contactUs.errorMessage.innerText).contains(data.expectedresult)
        } else {
          await t.expect(contactUs.successMessage.innerText).contains(data.expectedresult)
        }  
      
      });
      
})


