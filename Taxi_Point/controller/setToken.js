const {insertLoginHistory}=require('../view/userQuery')
const jwt=require('jsonwebtoken')
async function userLogin(data,params) {
    let userData={
        username:data.username,
        userId:data._id,
        firstName:data.firstName
    }
    let userToken = jwt.sign(userData, "Test@123");
    console.log(data._id);
    let _id=JSON.parse(JSON.stringify(data._id))
    console.log(_id);
   // Redis.client.set(_id, userToken)  // set data into redis
    //Update Login History
    let loginData={
        userId: data._id,
        islogin: true,
        token: userToken
    }
    await insertLoginHistory(loginData)
    return userToken;
}
module.exports={userLogin}