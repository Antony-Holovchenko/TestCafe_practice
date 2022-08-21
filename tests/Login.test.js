import Login from "../page-objects/LoginPage";
import registrationPage from "../page-objects/RegistrationPage";
const login = new Login()

fixture `Login test`
    .page('http://automationpractice.com/index.php')

test('Login with valid credentials', async t => {
    await login.Login('JohnDoe11@gmail.com', '123456John')
    await t.expect(login.account.innerText).contains('John'+' '+'Doe')
    await t.expect(login.navMyAccount.exists).ok()
})

test('Login with unregistered user(invalid credentials)', async t => {
    await login.Login('peterParker@gmail.com', '%hu&Jo(0')
    await t.expect(login.errorWindow.innerText).contains('Authentication failed.')
    await t.expect(login.signInBtn.exists).ok()
})

test('Login with missing email', async t => {
    await login.invalidLoginMissedEmail('123123@yhy')
    await t.expect(login.errorWindow.innerText).contains('An email address required.')
    await t.expect(login.signInBtn.exists).ok()
})

test('Login with missing password', async t => {
    await login.invalidLoginMissedPswrd('peter22@gmail.com')
    await t.expect(login.errorWindow.innerText).contains('Password is required.')
    await t.expect(login.signInBtn.exists).ok()
})