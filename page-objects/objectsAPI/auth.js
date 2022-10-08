import {t} from "testcafe"
class bookStore { 
constructor() { 
  this.token 
  this.response //response variable include insde all the response 
  this.responseData //responseData variable include insde only the response body
}

async login(requestEnv, username, password) {
          this.response = await t.request({
          url: requestEnv,
          method: "post",
          body:{
              username: username,
              password: password
        }
    })
    this.responseData = this.response.body 
    this.token = this.responseData.token
  }   

  async missedDataLogin(requestEnv) {
        this.response = await t.request({
        url: requestEnv,
        method: "post",
        body:{
       
        }
    })
    this.responseData = this.response.body
  }   
}
export default bookStore