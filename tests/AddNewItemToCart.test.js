import newItemInCart from "../page-objects/AddItemToCartPage"
const addNewItem = new newItemInCart()

fixture `Testing functionality of adding/deleting new items to/from shopping cart`
    .page('http://automationpractice.com/index.php')
    .beforeEach(async t => {
        await addNewItem.Login('JohnDoe11@gmail.com', '123456John')
    })


test.only('Adding 2 new items to cart', async t => {
    await addNewItem.addingItem()

    await t.expect(addNewItem.total.innerText).eql('$34.91')
    await t.expect(addNewItem.headCount.innerText).contains('Your shopping cart contains: 2 Products')
})


test.only('Delete added previously items from shopping cart', async t => {
    await addNewItem.addItem2()

    await t.expect(addNewItem.alert.innerText).eql('Your shopping cart is empty.')
    await t.expect(addNewItem.headerShopCart.exists).ok()
    await t.expect(addNewItem.total.exists).notOk()
})