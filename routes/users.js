const express =require('express')
const router= express.Router();

//users login 
router.get('/login',(req,res)=>{
    res.render("login")
})
router.get('/register',(req,res)=>{
    res.render("register")
})

router.post('/register',(req,res)=>{
// var data= JSON.stringify(req.body)
    // console.log(req.body);
    // res.send('hello')

    const {name,email,password,password2 }=req.body;
    console.log(name);
    let errors=[];

    //check for required fields
    if(!name || !email || !password || !password2)
    {
        errors.push({msg:'Please fill in all details'});
    }

    //password matching validation
    if(password!=password2){
        errors.push({msg:'Passwords do not match'});
    }

    //password length
    if(password.length < 6)
    {
        errors.push({msg:'password should be atleast 6 characters'})
    }
    if(errors.length>0)
    {
        res.render('register',{
            errors,
            name,
            email,
            password,
            password2
        });
    }
    else{
        res.send('pass');
    }
});

module.exports=router;