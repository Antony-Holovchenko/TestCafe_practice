import {t} from "testcafe"

class resource{
    constructor(){
    this.response
    this.responseData = [] 
    this.page = 0
    }

    async getResourceById(requestEnv){
        this.response = await t.request({
            url: requestEnv,
            method: "get"
        })
        this.responseData.push( this.response.body.data)
    }

}

export default resource