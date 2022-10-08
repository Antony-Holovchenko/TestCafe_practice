import resource from "../page-objects/objectsAPI/getResource"
const newRes = new resource
import Data from '../data/test_api_data/getResource.json'
require('dotenv').config()
const requestUrl = process.env.GET_RESOURCE

fixture `Receive resource by id`

test('Receive several resources', async t => {
    for (let i = 0; i < 4; i++) {
        newRes.page++
        await newRes.getResourceById(requestUrl + newRes.page)
        await t.expect(newRes.response.status).eql(200)
               .expect(newRes.responseData[i]).contains({name: Data[i].name},
                                                        {year: Data[i].year},
                                                        {pantone_value: Data[i].pantone_value})
                
    }
    await t.expect(newRes.responseData.length).eql(4)
    newRes.responseData.length = 0
})

test('Receive 404 status code when search for invalid page', async t => {
    await newRes.getResourceById(requestUrl + 0)
    await t.expect(newRes.response.status).eql(404)
           .expect(newRes.responseData.length).eql(1)
           .expect(newRes.responseData).eql([undefined])
})