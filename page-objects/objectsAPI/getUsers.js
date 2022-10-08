import {t} from "testcafe"

class userInfo{
    constructor(){
    this.response
    this.responseData 
    }

    async receiveUsersInfo(requestEnv){
        this.response = await t.request({
            url: requestEnv,
            method: "GET"
        })
        this.responseData = this.response.body.data 
    }

}

export default userInfo