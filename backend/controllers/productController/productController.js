const ProductModel=require("../../models/products") ;
const ProductJoi=require("../../validations/productJoi")


const addProduct=async(req,res)=>{
    const data=req.body
    const isJoiValidated=await ProductJoi.validateAsync(data)
    const saveData=new ProductModel(data);
    if(!saveData) throw new Error(400,"Insert all data")
    await saveData.save();
    res.status(200).send({message:"data saved successfully"})
}


const getallProducts=async(req,res)=>{
    const alldata=await ProductModel.find({})
    res.status(200).send({data:alldata,message:"succesfull"})
}



const getProductById=async(req,res)=>{
    const id=req.params.id;
    const data=await ProductModel.findById(id)
    res.status(200).send({data:data,message:"succesfull"})
}



const deleteProduct=async(req,res)=>{
    const id=req.params.id;
    const data=await ProductModel.findByIdAndDelete(id)
    res.status(200).send({data:data,message:" deleted succesfully"})

}



const updateProduct=async(req,res)=>{
    const id=req.params.id
    const newData= await ProductModel.findByIdAndUpdate(id,newData)
    //const checkData=new ProductModel(newData)
    res.status(200).send({data:data,message:"ok"})
}

module.exports={addProduct,getallProducts,updateProduct,deleteProduct,getProductById}