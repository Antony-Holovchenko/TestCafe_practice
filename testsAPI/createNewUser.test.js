import createUser from '../page-objects/objectsAPI/createNewUser'
const create = new createUser
import Data from '../data/test_api_data/createNewUserData.json'
require('dotenv').config()
const requestUrl = process.env.CREATE_USER


fixture `Creation of new users`

test('Create new users with full data', async t => {
    for (let i = 0; i < Data.length; i++) {
        await create.creation(requestUrl, Data[i].name, Data[i].job)
        await t.expect(create.response.status).eql(201)
               .expect(create.responseData[i]).contains({name: Data[i].name})
               .expect(create.responseData[i]).contains({job: Data[i].job})
               .expect(create.responseData[i]).contains({id: create.responseData[i].id})
    }     
    create.responseData.length = 0  
})

 test('Create user without name and job in request', async t => {
    await create.creationWithoutBody(requestUrl)
    await t.expect(create.response.status).eql(201)
           .expect(create.responseData[0]).notContains({name: create.responseData[0].name})
           .expect(create.responseData[0]).notContains({job: create.responseData[0].job})
           .expect(create.responseData[0]).contains({id: create.responseData[0].id})
    create.responseData.length = 0 
}) 

test('Create user with numbers + special characters', async t => {
    await create.creation(requestUrl, "676Pet^&", "De679)_+v")
    await t.expect(create.response.status).eql(201)
           .expect(create.responseData[0]).contains({name: "676Pet^&"})
           .expect(create.responseData[0]).contains({job: "De679)_+v"})
    create.responseData.length = 0  
}) 