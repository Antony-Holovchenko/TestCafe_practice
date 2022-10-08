import newItemInCart from "../page-objects/objectsUsual/AddItemToCartPage"
const addNewItem = new newItemInCart()
require('dotenv').config()
const baseUrl = process.env.BASE_URL

fixture `Testing functionality of adding/deleting new items to/from shopping cart`
    .page(baseUrl)
    .beforeEach(async t => {
        await addNewItem.Login('JohnDoe11@gmail.com', '123456John')
    })


test('Adding 2 new items to cart', async t => {
    await addNewItem.addingItem()
    await t.expect(addNewItem.total.innerText).eql('$34.91')
           .expect(addNewItem.headCount.innerText).contains('Your shopping cart contains: 2 Products')
})


test('Delete added previously items from shopping cart', async t => {
    await addNewItem.addItem2()
    await t.expect(addNewItem.alert.innerText).eql('Your shopping cart is empty.')
           .expect(addNewItem.headerShopCart.exists).ok()
           .expect(addNewItem.total.exists).notOk()
})