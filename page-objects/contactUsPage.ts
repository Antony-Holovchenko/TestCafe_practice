import { Selector, t } from "testcafe";

class contactUsForm{
    contactUsBtn:Selector = Selector('#contact-link')
    messageTheme:Selector = Selector('#id_contact')
    theme1:Selector = this.messageTheme.find('option')
    email:Selector = Selector('#email')
    orderId:Selector = Selector('#id_order')
    fileUpload:Selector = Selector('#fileUpload') 
    message: Selector = Selector('#message')
    sendBtn: Selector = Selector('#submitMessage')
    errorMessage: Selector = Selector('.alert-danger')
    successMessage: Selector = Selector('.alert-success')
}

export default contactUsForm