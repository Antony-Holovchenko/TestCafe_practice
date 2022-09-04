import { Selector, t } from "testcafe";

class searchPage{
    searchField: Selector = Selector('#search_query_top')
    listView: Selector = Selector('.icon-th-list')
    description:Selector = Selector('.product-desc')
    results:Selector = Selector('.heading-counter')
    errorAlert:Selector = Selector('.alert-warning')
    itemCount:number = 0
    

   async Search(t:TestController, item:string) {    
    await t
        .typeText(this.searchField, item)
        .pressKey('enter')
        .wait(2000)
         if (await this.errorAlert.exists) {
            console.log('No results')
         }
         else {
            await t.click(this.listView)
            .wait(2000)
            .hover(this.description)
            .wait(3000) 
         }
    }
    
   async countItemsOnPage(t:TestController, elem:string, elem2:string) {
        const counter:number = await this.description.count
        
        //check that our page contains the correct count of dresses(should be 5 items)
        for (let i = 0; i < counter; i++) {
            const arrayOfSplitWords = (await this.description.nth(i).innerText).split(' ') //split each of description elements for easier comparison

            //console.log(arrayOfSplitWords) //how the sentences are splitted

            await (arrayOfSplitWords.includes(elem) || arrayOfSplitWords.includes(elem2)) ? this.itemCount ++ : console.log('[No matches]') //check that after search we have the correct count of dress items
        }
    console.log(this.itemCount)
    }
} 
export default searchPage