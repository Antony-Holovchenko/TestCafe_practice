require('dotenv').config()
const baseUrl = process.env.BASE_URL
import RegistrationPage from "../page-objects/RegistrationPage";
const registerPage = new RegistrationPage()
import Data from "../data/registrationData.json"

fixture `Testing registration flow`
    .page(baseUrl)
    .beforeEach(async t => {
        //await t.setTestSpeed(0.1)
    })

test(Data.test1.testName, async t => {
    await registerPage.Registration(Data.test1.firstName, Data.test1.lastName, Data.test1.password, Data.test1.address, Data.test1.city, Data.test1.zip, Data.test1.phone)
    await t.expect(registerPage.accountBtn.innerText).contains(Data.test1.expectedResult)
    await t.expect(registerPage.signInbutton.exists).notOk()
    await t.expect(registerPage.logoutButton.exists).ok()
})

test(Data.test2.testName, async t => {
    await registerPage.RegistrationInvalid(Data.test2.firstName, Data.test2.lastName, Data.test2.password, Data.test2.address, Data.test2.zip)
    await t.expect(registerPage.errorMessage.innerText).contains(Data.test2.expectedResult)
    await t.expect(registerPage.submitAccountBtn.exists).ok()
})

test(Data.test3.testName, async t => {
    await registerPage.Registration(Data.test3.firstName, Data.test3.lastName, Data.test3.password, Data.test3.address, Data.test3.city, Data.test3.zip, Data.test3.phone)
    await t.expect(registerPage.errorMessage.innerText).contains(Data.test3.expectedResult1 && Data.test3.expectedResult2 && Data.test3.expectedResult3)
})

test(Data.test4.testName, async t => {
    await registerPage.RegistrWithExistingUser(Data.test4.email)
    await t.expect(registerPage.errorMessage.innerText).contains(Data.test4.expectedResult)
})






