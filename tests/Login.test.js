require('dotenv').config()
const baseUrl = process.env.BASE_URL
import Login from "../page-objects/LoginPage";
const login = new Login()
import Data from "../data/loginData.json"

fixture `Login test`
    .page (baseUrl)

test(Data.test1.testName, async t => {
    await login.Login(Data.test1.email, Data.test1.password)
    await t.expect(login.myaAccount.innerText).contains(Data.test1.expectedResult)
    await t.expect(login.navMyAccount.exists).ok() 
})

test(Data.test2.testName, async t => {
    await login.Login(Data.test2.email, Data.test2.password)
    await t.expect(login.errorMessage.innerText).contains(Data.test2.expectedResult)
    await t.expect(login.signInBtn.exists).ok()
})

test(Data.test3.testName, async t => {
    await login.invalidLoginMissedEmail(Data.test3.expectedResult)
    await t.expect(login.errorMessage.innerText).contains(Data.test3.expectedResult)
    await t.expect(login.signInBtn.exists).ok()
})

test(Data.test4.testName, async t => {
    await login.invalidLoginMissedPswrd(Data.test4.email)
    await t.expect(login.errorMessage.innerText).contains(Data.test4.expectedResult)
    await t.expect(login.signInBtn.exists).ok()
}) 
