
const UserModel=require("../../models/users")
const SignupJoi=require("../../validations/signupJoi")


const SignUp=async(req,res)=>{
    const data=req.body
    console.log(data);
    await SignupJoi.validateAsync(data)
    const toSave=new UserModel(data)
    await toSave.save()
    res.status(200).send("added succesfully")
}



const Login=async(req,res)=>{
    const data=req.body
    console.log(data);
    await SignupJoi.validateAsync(data)
   const isExist=await UserModel.findOne({email:req.body.email,password:req.body.password})
   if (!isExist) throw new Error("user not found")
    res.status(200).send({status:true,message:"success"})
}

module.exports={SignUp,Login}