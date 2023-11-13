const multer=require('multer')
const sharp=require('sharp')
const path=require('path')
const product=require('../models/productModel')


const storage=multer.diskStorage({
    destination:function (req,file,cb){
        cb(null,path.join(__dirname,"../public/images"))
    },
    filename:function (req,file,cb){
        const ext=Math.round(Math.random()*1e6);
        cb(null,file.originalname.split('.')[0]+"-"+ ext+".jpeg")
       
    },
});


const imageUpload=multer({
    storage:storage,
    limits:{fieldSize:8000000},
    fileFilter: function (req,file,cb){
        if(file.mimetype=="image/jpg"||file.mimetype=="image/jpeg"||file.mimetype=="image/jpg")
        {
            cb(null,true)
        }else
        {
            alert("only JPG and PNG supported")
            cb(null,false)
        }
    }
   
})
const ProductwithResize=async (req,res,next)=>{
    if(!req.files)return next();
    await promise.all(
        req.files.map(async(file)=>{
        await sharp(file.path)
        .resize(300,300)
        .toFormat('jpeg')
        .jpeg({quality:90})
        .toFile(`public/images/${file.filename}`);
        
    })
    )
    next()
}



module.exports={imageUpload,ProductwithResize}

