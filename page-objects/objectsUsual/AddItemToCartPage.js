import { Selector, t } from "testcafe";
import Login from "./LoginPage";

class newItemInCart extends Login{
    constructor(){
        super()

        this.navHome = Selector('.icon-home')
        this.moreBtn = Selector('.lnk_view')
        this.color = Selector('#color_14')
        this.addToCartBtn = Selector('#add_to_cart')
        this.continueShoppingBtn = Selector('.icon-chevron-left')
        this.shoppingCart = Selector('.shopping_cart')
        this.navWomenSection = Selector('a').withAttribute('title', 'Women')
        this.checkboxDress = Selector('#layered_category_8')
        this.dress = Selector('img').withAttribute('alt', 'Printed Chiffon Dress')
        this.addButton = Selector('a').withAttribute('data-id-product', '7')
        this.gotoCartBtn = Selector('a').withText('Proceed to checkout')
        this.total = Selector('#total_price')
        this.headCount = Selector('.heading-counter')
        this.product1 = Selector('a').withAttribute('data-id-product', '1')
        this.product2 = Selector('a').withAttribute('data-id-product', '2')
        this.deleteBtn1 = Selector('a').withAttribute('id', '1_1_0_736376')
        this.deleteBtn2 = Selector('a').withAttribute('id', '2_7_0_736376')
        this.closeBtn = Selector('.cross')
        this.alert = Selector('.alert-warning')
        this.headerShopCart = Selector('span').withText('(empty)')
    }

    async addingItem(){
        await t
            .click(this.navHome)
            .wait(2000)
            .click(this.moreBtn)
            .click(this.color)
            .click(this.addToCartBtn)
            .click(this.continueShoppingBtn)
            .click(this.navWomenSection)
            .click(this.checkboxDress)
            .wait(3000)
            .hover(this.dress)
            .click(this.addButton)
            .click(this.gotoCartBtn)
    }

    async addItem2(){
        await t
            .click(this.navHome)
            .wait(2000)
            .click(this.product1)
            .click(this.closeBtn)
            .click(this.product2)
            .click(this.gotoCartBtn)
            .click(this.deleteBtn1)
            .click(this.deleteBtn2)
    }

}
export default newItemInCart