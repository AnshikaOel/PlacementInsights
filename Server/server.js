const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const fs=require('fs/promises')
const fs = require('fs').promises;
const path=require('path');
const internships = require('./fetch-jobs');
// const { CallTracker } = require('assert');
// const { Await } = require('react-router-dom');
// const { userInfo } = require('os');
// const { count } = require('console');
// const userIndo =require('./userInfo.json')
const port = 5000;
const app = express();

app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
})); 


// saving data
app.post('/userInfo',async(req,res)=>{
    const {fname,lname,id,password,phone_no,TodoList}=req.body;
    const data={
        fname,
        lname,
        id, 
        phone_no,
        password,
        TodoList
    }
    try{
        const filePath=path.join(__dirname,'userInfo.json')
        let existingInfo=[]
        try{
            const existingDataBuffer=await fs.readFile(filePath)
            existingInfo=JSON.parse(existingDataBuffer.toString())
        }catch(readError){

        }
        existingInfo.push(data)
        await fs.writeFile(filePath,JSON.stringify(existingInfo,null,2))
        console.log("data stored successfully")
        res.status(200).json({success:true,message:'Data saved Successfully'})
    }catch(error){
        console.error("Error saving data : ",error)
        res.status(500).json({success:false,message:'Error saving data'})
    }
})


// retriving data
app.post('/login',async(req,res)=>{
    const{id,password}=req.body
    let fileData=[]
    try{
        let filePath=path.join(__dirname,'userInfo.json')
        const fileContent=await fs.readFile(filePath,'utf-8')
        fileData=JSON.parse(fileContent)
    }catch(err){
        console.error(err)
    }
    console.log(fileData)
    const verificationstatus=fileData.find(u=>u.id==id && u.password==password)
    if(verificationstatus){
        res.json({success:true})
    }else{
        res.json({success:false,error:'Invalid Credentials'})
    }
})

//    getting username 
app.post('/userName',async(req,res)=>{
    const {id}=req.body
    let fileData=[]
    try{
        let filePath=path.join(__dirname,'userInfo.json')
        const fileContent=await fs.readFile(filePath,'utf-8')
        fileData=JSON.parse(fileContent)
    }catch(err)
    {
        console.error("Some error occured--"+err)
        return res.status(500).json({success:false,message:"Invalid Server Error"})
    }
    let nameUser=fileData.find(u=>u.id==id)
    if(!nameUser){
        return res.json({success:false,message:"User not found",data:null})
    }
   res.json({success:true,message:"user found",data:{nameUser}})
})


// //saving  data of post 
app.post('/todoList',async(req,res)=>{
    const data =req.body
    const newData={
        id:data.id,
        TodoList:data.todo
    } 
    console.log(newData)
    try{
        let filePath=path.join(__dirname,'userInfo.json')
        const content=await fs.readFile(filePath,'utf8')
         const jsonData=JSON.parse(content)
        //  console.log(jsonData)
        const objectToUpdate=jsonData.findIndex(obj=>obj.id===data.id)
                if(objectToUpdate!==-1){
                   Object.assign(jsonData[objectToUpdate],newData) 
                   await fs.writeFile(filePath,JSON.stringify(jsonData,null,2),'utf-8')
                   console.log('data has been updated successfully')
                   res.status(200).json({message:'data updated '})
                }else{
                    console.error('ID not found ',data.id)
                    res.status(404).json({error:'Id Not found'})
                }
    }catch(error){
        console.error("error in adding file : ",error)
        res.status(500).json({error:'Internal Server Error'})
    }
})

//giving data back of todo
app.post('/get_todo',async(req,res)=>{
    const id=req.body.id
    try{
        let filePath=path.join(__dirname,'userInfo.json')
        const content=await fs.readFile(filePath,'utf8')
        const jsonData=JSON.parse(content)
        const objectToUpdate=jsonData.findIndex(obj=>obj.id===id)
        if(objectToUpdate!==-1){
            res.status(200).json({message:'data is on the way',data:jsonData[objectToUpdate].TodoList})
        }else{
            res.status(404).json({message:'Todo Not Found'})
        }
    }
    catch(err){
        console.error(err)
        res.status(500).json({message:"Internal Server Error"})
    }
})

// deleting todo
app.post('/delete_todo',async(req,res)=>{
    const id=req.body.id
    const title=req.body.title
    console.log("this is id",id)
    console.log("thi todoloist",title)

    try{
        let filePath=path.join(__dirname,'userInfo.json')
        const content=await fs.readFile(filePath,'utf8')
        const jsonData=JSON.parse(content)
        const objectToUpdate=jsonData.findIndex(obj=>obj.id===id)
        if(objectToUpdate!==-1){
            jsonData[objectToUpdate].TodoList=jsonData[objectToUpdate].TodoList.filter((todo)=>todo.title!==title)
            await fs.writeFile(filePath,JSON.stringify(jsonData,null,2))
            console.log("data written succesfuly")
        }
        console.log("heyyyyy")
        res.status(200).json({message:'data is on the way'})
    }
    catch(err){
        console.error(err)
        res.status(500).json({message:"Internal Server Error"})
    }
})


// //get all data 
// app.get('/getData',async(req,res)=>{
//     try{
//         let filePath=path.join(__dirname,'userInfo.json')
//         const content=await fs.readFile(filePath,'utf-8')
//         const data=JSON.parse(content)
//         res.status(200).json({message:"data send successfully",data:data})
//     }catch(error){
//         console.error('error in reading file ',error)
//         res.status(500).json({error:'Internal Server Error'})
//     }
// })

///////////////
// patch ti update the data
// app.patch('/update_todo',async(req,res)=>{
//     const id=req.body.id
//     // const id=0
//     const data=req.body
//     console.log(data)
//     try{
//         let filePath=path.join(__dirname,'userInfo.json')
//         const content=await fs.readFile(filePath,'utf8')
//          const jsonData=JSON.parse(content)
//         //  console.log(jsonData)
//         const objectToUpdate=jsonData.findIndex(obj=>obj.id===id)
//         if(objectToUpdate!=-1){
//             jsonData[objectToUpdate] = { ...jsonData[objectToUpdate], ...data };
//         //   console.log(jsonData,objectToUpdate)
//           await fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), 'utf8');
//         }
//         res.status(400).json({message:'data updated'})
//     }catch(err){
//         console.error("error : ",err)
//         res.status(500).json({error:"some error occured"})
//     }
// })

app.get('/internship/fetch/', (req, res) => {
    internships.fetchInternships().then((data) => {
        res.json(data);
    });
});

app.get('/internship/apply/:internshipId', (req,res) => {
    var userId = req.query.userId;
    var internshipId = req.params.internshipId;
    users.applyInternship(userId, internshipId);
    res.send("Applied to internship");
});

app.get('/internship/applied', (req,res) => {
    var userId = req.query.userId;
    var appliedInternshipIds = users.fetchAppliedInternships(userId);
    var appliedInternships = appliedInternshipIds.map(appliedInternshipId => {
        return internships.fetchInternshipInformation(appliedInternshipId);
    });
    res.json(appliedInternships);
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

