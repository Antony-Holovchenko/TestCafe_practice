require('dotenv').config()
const baseUrl = process.env.BASE_URL
import forgotPassword from "../page-objects/ForgottenPasswordPage"
const forgotpassword = new forgotPassword

fixture `Forgotten password test`
    .page(baseUrl)

test('Send password restoration link for valid email', async t => {
    await forgotpassword.forgotPswrd('JohnDoe11@gmail.com')
    await t.expect(forgotpassword.messageSuccess.innerText).eql('A confirmation email has been sent to your address: JohnDoe11@gmail.com')
    await t.expect(forgotpassword.errorMessage.exists).notOk()
    await t.expect(forgotpassword.retrievePasswordBtn.exists).notOk()
})

test('Send password restoration link for unregistered email', async t => {
    await forgotpassword.forgotPswrd('John12312@gmail.com')
    await t.expect(forgotpassword.errorMessage.innerText).contains('There is no account registered for this email address.')
    await t.expect(forgotpassword.messageSuccess.exists).notOk()
})
