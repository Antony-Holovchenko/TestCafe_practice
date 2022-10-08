import userInfo from '../page-objects/objectsAPI/getUsers'
const userinfo = new userInfo
import Data from '../data/test_api_data/getUsersPage1.json'
import Data2 from '../data/test_api_data/getUsersPage2.json'
require('dotenv').config()
const requestUrl = process.env.GET_USERS



fixture`Get users information from our pages`

test('Verify correct first-name and last-name appear on the first page', async t => {
    await userinfo.receiveUsersInfo(requestUrl+1) //+1 - this is our request page(we want to receive the 1st page of users)
    await t.expect(userinfo.response.status).eql(200)
    for (let i = 0; i < Data.length; i++) {
        await t.expect(userinfo.responseData[i]).contains({first_name: Data[i].first_name})
               .expect(userinfo.responseData[i]).contains({last_name: Data[i].last_name})
               .expect(userinfo.responseData[i]).notContains({first_name: Data2[i].first_name})
               .expect(userinfo.responseData[i]).notContains({last_name: Data2[i].last_name})
    }
})

test('Verify correct first-name and last-name appear on the second page', async t => {
    await userinfo.receiveUsersInfo(requestUrl+2)
    await t.expect(userinfo.response.status).eql(200)
    for (let i = 0; i < Data2.length; i++) {
        await t.expect(userinfo.responseData[i]).contains({first_name: Data2[i].first_name})
               .expect(userinfo.responseData[i]).contains({last_name: Data2[i].last_name})
               .expect(userinfo.responseData[i]).notContains({first_name: Data[i].first_name})
               .expect(userinfo.responseData[i]).notContains({last_name: Data[i].last_name})
    }
})

test('Verify there is no users in response if we request for non-existent page', async t => {
    await userinfo.receiveUsersInfo(requestUrl +'-2')
    await t.expect(userinfo.responseData.length).eql(0); //zero users because of non-existent page
})

test('Verify user see a 1st page in response if in the page-search were incorrect characters', async t => {
    await userinfo.receiveUsersInfo(requestUrl +'№;2;')
    await t.expect(userinfo.response.body.page).eql(1)
})