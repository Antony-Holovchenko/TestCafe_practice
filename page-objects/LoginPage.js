import {Selector, t} from "testcafe"
import RegistrationPage from "./RegistrationPage";

class Login extends RegistrationPage{
    constructor() {
        super()
        this.email = Selector('#email')
        this.signInBtn = Selector('#SubmitLogin')
        this.myaAccount = Selector('.info-account')
        this.navMyAccount = Selector('.navigation_page')
    }

    async Login(email, password){
        await t
            .click(this.signInbutton)
            .typeText(this.email, email, {paste: true})
            .typeText(this.password, password, {paste: true})
            .click(this.signInBtn)
    }

    async invalidLoginMissedEmail(password){
        await t
            .click(this.signInbutton)
            .typeText(this.password, password, {paste: true})
            .click(this.signInBtn)
    }
    async invalidLoginMissedPswrd(email){
        await t
            .click(this.signInbutton)
            .typeText(this.email, email, {paste: true})
            .click(this.signInBtn)
    }

}

export default Login