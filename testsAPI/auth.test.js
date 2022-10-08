import bookStore from "../page-objects/objectsAPI/auth"
const bookstore = new bookStore
import Data from'../data/test_api_data/auth.json'
require('dotenv').config()
const requestUrl = process.env.AUTH_URL

fixture`Authorisation test`

test('Authorization with valid credentials', async t => {
  await bookstore.login(requestUrl, Data[0].username, Data[0].password)
  await t.expect(bookstore.response.status).notEql(400)
         .expect(bookstore.responseData).contains({token: bookstore.token})
})

test('Authorization with invalid credentials', async t => {
  await bookstore.login(requestUrl, Data[1].username, Data[1].password)
  await t.expect(bookstore.response.status).eql(200) //this is the issue of the practice site -> status code is incorrect
         .expect(bookstore.responseData).eql({reason: Data[1].expResult}) 
})

test('Authorization without credentials', async t => {
  await bookstore.missedDataLogin(requestUrl)
  await t.expect(bookstore.response.status).eql(200) //this is the issue of the practice site -> status code is incorrect
         .expect(bookstore.responseData).eql({reason: Data[2].expResult})
})