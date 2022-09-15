require('dotenv').config()
const baseUrl = process.env.BASE_URL
import forgotPassword from "../page-objects/ForgottenPasswordPage"
const forgotpassword = new forgotPassword
import Data from "../data/forgotPasswordData.json"
 

fixture `Forgotten password test`
    .page(baseUrl)

test(Data.test1.testName, async t => {
    await forgotpassword.forgotPswrd(Data.test1.email)
    await t.expect(forgotpassword.messageSuccess.innerText).eql(Data.test1.expectedResult)
    await t.expect(forgotpassword.errorMessage.exists).notOk()
    await t.expect(forgotpassword.retrievePasswordBtn.exists).notOk()
})

test(Data.test2.testName, async t => {
    await forgotpassword.forgotPswrd(Data.test2.email)
    await t.expect(forgotpassword.errorMessage.innerText).contains(Data.test2.expectedResult)
    await t.expect(forgotpassword.messageSuccess.exists).notOk()
})

test(Data.test3.testName , async t => {
    await forgotpassword.sendLinkWithoutEmail()
    await t.expect(forgotpassword.errorMessage.innerText).contains(Data.test3.expectedResult)
    await t.expect(forgotpassword.messageSuccess.exists).notOk()
})

test(Data.test4.testName , async t => {
    await forgotpassword.forgotPswrd(Data.test4.email)
    await t.expect(forgotpassword.errorMessage.innerText).contains(Data.test4.expectedResult)
    await t.expect(forgotpassword.messageSuccess.exists).notOk()
})
