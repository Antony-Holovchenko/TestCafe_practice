import {Selector, t} from "testcafe"
import {randomNumber} from '../helpers'


class RegistrationPage{
    constructor() {
        this.signInbutton = Selector('.login')
        this.emailField = Selector('#email_create')
        this.genderRadioBtn = Selector('#id_gender1')
        this.firstName = Selector('#customer_firstname')
        this.lastName = Selector('#customer_lastname')
        this.password = Selector('#passwd')
        this.DOBday = Selector('#days')
        this.optionElementDay = this.DOBday.find('option');
        this.DOBmonth = Selector('#months')
        this.optionElementMonth = this.DOBmonth.find('option');
        this.DOByear = Selector('#years')
        this.optionElementYear = this.DOByear.find('option');
        this.userAddress = Selector('#address1')
        this.userCity = Selector('#city')
        this.userState = Selector('#id_state')
        this.optionElement = this.userState.find('option');
        this.userZipCode = Selector('#postcode')
        this.userMobPhone = Selector('#phone_mobile')
        this.submitAccountBtn = Selector('#submitAccount')
        this.accountBtn = Selector('.account')
        this.logoutButton = Selector('.logout')
        this.errorMessage = Selector('.alert-danger')
    }


    async Registration(fstname, lstname, paswrd, address, city, zip, phone){
        await t
            .click(this.signInbutton)
            .typeText(this.emailField, 'johnDoe'+ await randomNumber(1, 1000) + '@gmail.com',{paste: true})
            .pressKey('enter')
            .click(this.genderRadioBtn)
            .typeText(this.firstName, fstname, {paste: true})
            .typeText(this.lastName, lstname, {paste: true})
            .typeText(this.password, paswrd, {paste: true})
            .click(this.DOBday).click(this.optionElementDay.withText('5'))
            .click(this.DOBmonth).click(this.optionElementMonth.withText('May'))
            .click(this.DOByear).click(this.optionElementYear.withText('2000'))
            .typeText(this.userAddress, address, {paste: true})
            .typeText(this.userCity, city, {paste: true})
            .click(this.userState).click(this.optionElement.withText('New York'))
            .typeText(this.userZipCode, zip, {paste: true})
            .typeText(this.userMobPhone, phone, {paste: true})
            .click(this.submitAccountBtn)
    }

    async RegistrationInvalid(firstname, lastname, password, addr, Zip){
        await t
            .click(this.signInbutton)
            .typeText(this.emailField, 'johnDoe'+ await randomNumber(1, 1000) + '@gmail.com',{paste: true})
            .pressKey('enter')
            .click(this.genderRadioBtn)
            .typeText(this.firstName, firstname, {paste: true})
            .typeText(this.lastName, lastname, {paste: true})
            .typeText(this.password, password, {paste: true})
            .click(this.DOBday).click(this.optionElementDay.withText('5'))
            .click(this.DOBmonth).click(this.optionElementMonth.withText('May'))
            .click(this.DOByear).click(this.optionElementYear.withText('2000'))
            .typeText(this.userAddress, addr, {paste: true})
            .click(this.userState).click(this.optionElement.withText('New York'))
            .typeText(this.userZipCode, Zip, {paste: true})
            .click(this.submitAccountBtn)
    }
}

export default RegistrationPage