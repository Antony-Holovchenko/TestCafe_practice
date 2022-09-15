import { Selector, t } from "testcafe";
let iterator:number = 0 // we need iterator to jump on each case from the switch construction 

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

async sendValidForm(t:TestController, email:string, orderID:string, attachedFile:string, messageText:string) {
   
    if(iterator <= 5) { 
        iterator++
    
        switch (iterator) {
            case 1:
                await t 
                    .click(this.contactUsBtn)
                    .click(this.messageTheme)
                    .click(this.theme1.withText('Customer service'))
                    .typeText(this.email, email)
                    .typeText(this.orderId, orderID)
                    .setFilesToUpload(this.fileUpload, attachedFile)
                    .typeText(this.message, messageText) 
                    .click(this.sendBtn)
                break;
        
            case 2:
                await t
                    .click(this.contactUsBtn)
                    .click(this.messageTheme)
                    .click(this.theme1.withText('Customer service'))
                    .typeText(this.email, email)
                    .typeText(this.orderId, orderID)
                    .setFilesToUpload(this.fileUpload, attachedFile)
                    .typeText(this.message, messageText) 
                    .click(this.sendBtn)
                break;
                
            case 3:
                await t
                    .click(this.contactUsBtn)
                    .click(this.messageTheme)
                    .click(this.theme1.withText('Customer service'))
                    .typeText(this.email, email)
                    .typeText(this.orderId, orderID)
                    .setFilesToUpload(this.fileUpload, attachedFile)
                    .click(this.sendBtn)
                break;
                    
            case 4:
                await t
                    .click(this.contactUsBtn)
                    .click(this.messageTheme)
                    .click(this.theme1.withText('Customer service'))
                    .typeText(this.orderId, orderID)
                    .setFilesToUpload(this.fileUpload, attachedFile)
                    .typeText(this.message, messageText)
                    .click(this.sendBtn)
                break;
            case 5:
                await t
                    .click(this.contactUsBtn)
                    .click(this.messageTheme)
                    .click(this.theme1.withText('Customer service'))
                    .typeText(this.email, email)
                    .typeText(this.message, messageText)
                    .click(this.sendBtn)
                break;
                    
        }
    }
    
}
 
}

export default contactUsForm