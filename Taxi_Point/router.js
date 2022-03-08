const express=require('express');
const { validatorUserSchema,validatorUserLoginSchema } = require('./controller/schmaValdn');
const {createUser}=require('./controller/createUser')
const {findUserDetails}=require('./view/userQuery')
const {userLogin}=require('./controller/setToken')
var router = express.Router();

router.post('/regiserUser',validatorUserSchema,async (req,res)=>{
    let data= req.body;
    data= await createUser(data);
   res.status(200).json({status:true, code: 200});
})
router.post('/loginUser',validatorUserLoginSchema,async (req,res)=>{
    let data = await findUserDetails(req.body);
    console.log(data);
    if(!data){
        console.log("Username or Password are incorrect");
    }
    else{
       let userToken = await userLogin(data)
        console.log(userToken);
       res.status(200).json({status:true, code: 200, data: {token:userToken}});
    }
})















module.exports={router}