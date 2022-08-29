const express=require('express');
const path=require('path');
const app1=express();
const bodyparser=require('body-parser');
/*const cors=require('cors');
const dotenv=require('dotenv');
dotenv.config();

app1.use(cors());
app1.use(express.json());*/
app1.use(bodyparser.urlencoded({extended:false}));
app1.use('/public',express.static(path.join(__dirname,'project1')));
app1.use(express.urlencoded({extended:false}));

//creating

app1.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/project1','/index1.html'))
});

//read
app1.post('/',(req,res)=>{
    console.log('testing');
    console.log(req.body);
});

//update


//delete

//creating server
app1.listen(process.env.PORT,()=>console.log('server is running'));