import * as dotenv from 'dotenv'
dotenv.config()
const baseUrl = process.env.BASE_URL!;
import searchPage from "../page-objects/SearchPage";
const search = new searchPage
const Data = require('../data/searchData.json')


fixture `Testing search functionality with different items`
    .page(baseUrl)
    
test(Data.test1.testName, async t => {
    await search.Search(t, Data.test1.searchItem)
    await search.countItemsOnPage(t,'dress', 'dress.')

    await t.expect(search.itemCount).eql(5)
    await t.expect(search.results.innerText).eql(Data.test1.expectedResult)
    search.itemCount = 0 //resetting the item counter
    
})

test(Data.test2.testName, async  t => {
    await search.Search(t, Data.test2.searchItem)
    await search.countItemsOnPage(t,'t-shirt', 'T-shirt')

    await t.expect(search.itemCount).eql(1)
    await t.expect(search.results.innerText).eql(Data.test2.expectedResult)
    search.itemCount = 0 //resetting the item counter
})

test(Data.test3.testName, async  t => {
     await search.Search(t, Data.test3.searchItem)
     await search.countItemsOnPage(t,'Blouse', 'blouse')

     await t.expect(search.itemCount).eql(1)
     await t.expect(search.results.innerText).eql(Data.test3.expectedResult)
     search.itemCount = 0 //resetting the item counter
 })

test(Data.test4.testName, async  t => {
    await search.Search(t, Data.test4.searchItem)
    await search.countItemsOnPage(t,'Trousers', 'trousers')

    await t.expect(search.itemCount).eql(0)
    await t.expect(search.results.innerText).eql(Data.test4.expectedResult1)
    await t.expect(search.errorAlert.innerText).contains(Data.test4.expectedResult2)
    search.itemCount = 0 //resetting the item counter
})

 

