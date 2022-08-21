import RegistrationPage from "../page-objects/RegistrationPage";
const registerPage = new RegistrationPage()

fixture `Testing registration flow`
    .page('http://automationpractice.com/index.php')
    .beforeEach(async t => {
        //await t.setTestSpeed(0.1)
    })

test('Successful registration with valid data', async t => {
    await registerPage.Registration( 'John', 'Doe', '123123Do@', 'Washington street 43', 'New York', '66545', '+380777777777')
    await t.expect(registerPage.accountBtn.innerText).contains('John Doe')
    await t.expect(registerPage.signInbutton.exists).notOk()
    await t.expect(registerPage.logoutButton.exists).ok()
})

test('Registration without required fields (phone number and city)', async t => {
    await registerPage.RegistrationInvalid('John', 'Doe', '123123Do@', 'Washington street 43','69103')
    await t.expect(registerPage.errorMessage.innerText).contains('There are 2 errors')
    await t.expect(registerPage.submitAccountBtn.exists).ok()
})

test('Registration with invalid data', async t => {
    await registerPage.Registration('55', '55', '0', 'Washington street 43', 'New York', '66545', '+380777777777')
    await t.expect(registerPage.errorMessage.innerText).contains('lastname is invalid.' && 'firstname is invalid.' && 'passwd is invalid.')
})





