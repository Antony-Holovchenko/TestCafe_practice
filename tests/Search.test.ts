import * as dotenv from 'dotenv'
dotenv.config()
const baseUrl = process.env.BASE_URL!;
import searchPage from "../page-objects/SearchPage";
const search = new searchPage


fixture `Testing search functionality with different items`
    .page(baseUrl)
    
test('Shop should have 5 dresses on the page', async t => {
    await search.Search(t, 'Printed Dress')
    await search.countItemsOnPage(t,'dress', 'dress.')

    await t.expect(search.itemCount).eql(5)
    await t.expect(search.results.innerText).eql('5 results have been found.')
    search.itemCount = 0 //resetting the item counter
    
})

test('Shop should have only 1 t-shirt item', async  t => {
    await search.Search(t, 'T-shirt')
    await search.countItemsOnPage(t,'t-shirt', 'T-shirt')

    await t.expect(search.itemCount).eql(1)
    await t.expect(search.results.innerText).eql('1 result has been found.')
    search.itemCount = 0 //resetting the item counter
})

test('Shop should have only 1 blouse item', async  t => {
     await search.Search(t, 'Blouse')
     await search.countItemsOnPage(t,'Blouse', 'blouse')

     await t.expect(search.itemCount).eql(1)
     await t.expect(search.results.innerText).eql('1 result has been found.')
     search.itemCount = 0 //resetting the item counter
 })

test('User should see an error-message after incorrect search', async  t => {
    await search.Search(t, 'Trousers')
    await search.countItemsOnPage(t,'Trousers', 'trousers')

    await t.expect(search.itemCount).eql(0)
    await t.expect(search.results.innerText).eql('0 results have been found.')
    await t.expect(search.errorAlert.innerText).contains('No results were found for your search')
    search.itemCount = 0 //resetting the item counter
})

 

