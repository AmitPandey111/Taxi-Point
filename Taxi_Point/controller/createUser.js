const {addUser}=require('../view/userQuery')
async function createUser(data){
    let userData= await addUser(data)
    return userData;
}
module.exports={createUser}