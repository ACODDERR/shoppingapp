const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/UserModule')
const jwt = require('jsonwebtoken')

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/mymernapp",{})

app.post('/api/register',async(req,res) =>{
    console.log(req.body)
    try{
        const user = await User.create({
            name:req.body.name,
            number:req.body.number,
            email:req.body.email,
            password:req.body.password,
        })
        res.json({status: 'ok'})
    } catch(err){
        res.json({status: 'error',error:'Duplicate Email'})
    }

})
app.post('/api/login',async(req,res) =>{

        const user = await User.findOne({

            email:req.body.email,
            password:req.body.password,
        })
        if(user){
            const token = jwt.sign({
                name:user.name,
                email:user.email
            },'secret')

            return res.json({status:'ok',user:token})
        }else{
            return res.json({status:'error',user:false})
        }
    
    

})





app.listen(8000,() => console.log("Server Started"))