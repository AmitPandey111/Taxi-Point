const mongoose=require('mongoose')
async function mongoConnection(){
    await mongoose.connect('mongodb://localhost:27017/taxiPoint_Db');
    console.log("--------- mongo database connected ---------");
}
module.exports={mongoConnection}