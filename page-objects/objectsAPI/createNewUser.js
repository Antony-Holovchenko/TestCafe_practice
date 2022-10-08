import {t} from "testcafe"

class createUser{
    constructor(){
    this.response 
    this.responseData = []

    }

    async creation(requestEnv, name, job) {
        this.response = await t.request({
            url: requestEnv,
            method: 'post',
            body: {
                name: name,
                job: job
            }
        })
        this.responseData.push(this.response.body)
    }

    async creationWithoutBody(requestEnv) {
        this.response = await t.request({
            url: requestEnv,
            method: 'post'
        })
        this.responseData.push(this.response.body)
    }

}

export default createUser