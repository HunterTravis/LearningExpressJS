const express = require('express');
const router = express.Router();


router.get("", (req,res)=>{
    res.send("Users List");
})
router.get("/new",(req,res)=>{
    res.send("Add new user");
})

router.post("/",(req,res)=>{
    res.send("Create new user");
})

router.route("/:id").get((req,res)=>{
    console.log(req.user)
    res.send("User details of ID: "+req.params.id);
}).put((req,res)=>{
    res.send("Update User details of ID: "+req.params.id);
}).delete((req,res)=>{
    res.send("Delete User of ID: "+req.params.id);
})

const users = [{name:"Kyle"}, {name:"Sally"}]

router.param("id", (req,res,next,id)=>{
    req.user=users[id]
    next();
})


module.exports = router;