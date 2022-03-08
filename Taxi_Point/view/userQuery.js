const { User } = require("../model/user");
const {login_history}=require("../model/loginHistory")

async function addUser(data){
    try {
        data= await User.create(data)
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
async function findUserDetails(data) {
    try {
        return await new Promise((res, rej) => {
            User.findOne(data, (err, data) => {
                if (err) {
                    rej(err)
                }
                res(data)
            })
        })
    } catch (err) {
        console.log(err);
    }
}
async function insertLoginHistory(data) {
    try {
        return await new Promise((res, rej) => {
            login_history.create(data, (err, data) => {
                if (err) {
                    rej(err)
                }
                res(data)
            })
        })
    } catch (err) {
        console.log(err);
    }
}
module.exports={addUser,findUserDetails,insertLoginHistory}