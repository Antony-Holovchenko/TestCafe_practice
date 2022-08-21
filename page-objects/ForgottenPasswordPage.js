import {Selector, t} from "testcafe"
import RegistrationPage from "./RegistrationPage";


class forgotPassword extends RegistrationPage {
    constructor() {
        super()
        this.email = Selector('#email')
        this.forgotPasswordBtn = Selector('a').withText('Forgot your password?')
        this.messageSuccess = Selector('.alert-success')
        this.retrievePasswordBtn = Selector('button').withText('Retrieve Password')
    }

    async forgotPswrd(email){
        await t
            .click(this.signInbutton)
            .click(this.forgotPasswordBtn)
            .typeText(this.email, email)
            .pressKey('enter')
    }
}
export default forgotPassword