const express =require('express');
const mongoose=require('mongoose');
const order =require('./models/orderDetails')
const cors =require('cors')
const app=express();
const bodyParser=require('body-parser')
const registrations=require('./models/registrationDetails')
const multer =require('multer')
const nodemailer=require('nodemailer');
// const Ice=require('./models/ice.js')
mongoose.connect("mongodb+srv://22a95a0503:m8UN6AcVgAkEZeTt@cluster0.j7vzml3.mongodb.net/CoffeeShop?retryWrites=true&w=majority")
.then(console.log("DataBase connected"))
app.use(bodyParser.json())
app.use('/images',express.static('public/images'))
app.use(express.static('public'))
app.use(cors()) 
app.use(express.json())
// const storage = multer.diskStorage({
//   destination: function (req, file, callback) {
//     callback(null, 'public/images')
//   },
//   filename: function (req, file, callback) {
//     // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//     callback(null,file.originalname)
//   }
// })

// const upload = multer({ storage: storage })
app.post("/orderDetails",(req,res,next)=>{
       
    const {name,email,phoneNo,date,time,item,minus}=req.body;
   // console.log(req.body);
      let orderData;
    try{
        orderData=new order({
        name,email,phoneNo,date,time,item,minus
       })
    }
     catch(err){return console.log(err);}
       orderData.save();
      
      return res.send(orderData);
})
app.get('/myorders',async (req,res,next)=>{
    const orderitems=await order.find();
    return res.status(200).json({orderitems})
})
app.delete('/deleteitem/:id',async(req,res,next)=>{
    const _id = req.params.id;
  
    let removeData;
    try{
       removeData = await order.findByIdAndDelete(_id);
    }catch(err){
        return console.log(err)
    }
    return res.send("delete success")
})
app.post("/register",async (req,res,next)=>{
    const {name,email,phoneNo,password,confirmpassword}=req.body;
    let data=await registrations.find({email});
    console.log(data.length);
     if(password!==confirmpassword) return res.send("password mismatch");
    if(data.length>0){ 
         return res.send("notregistered");
     }
    const registration=new registrations({
        name,email,phoneNo,password,confirmpassword
    })
     try{
      registration.save();

     }
     catch(err){
        return res.status(403).json(err);
     }
    //  return res.status(200).json(registration);
    return res.send("registered");
     
})


const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, 'public/images')
    },
    filename: function (req, file, callback) {
      // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      callback(null,file.originalname)
    }
  })
   const upload = multer({ storage: storage })
app.post("/login",async (req,res,next)=>{
  const {email,password}=req.body;
    let data=await registrations.find({email:email,password:password});
    if(data.length>0)
    {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'nandepuphanishankar@gmail.com',
              pass: 'cbcn igft iuyj czvs'
            }
          });
          
          var mailOptions = {
            from: 'baluseendripu123@gmail.com',
            to: email,
            subject: 'IceCream Parlour',
            text: 'Thanks for visiting !   Have the delicious items'
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    return res.json("found")
    }
    else return res.json("notfound");
    
})

app.listen('5000',()=>{
    console.log("Connected and listening to port 5000");
})