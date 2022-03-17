import express from 'express'
import { uuid } from 'uuidv4';


const router = express.Router();

let users=[
    {
        firstname:'Radhe',
        lastname: 'Shamyam',
        age:5,
        id:1,
    },
    {
        firstname:'komal',
        lastname: 'kanaujiya',
        age:5000,
        id:2
    }
]
router.get('/',(req,res)=>{

    res.send(users);

});

// post method
router.post('/',(req,res)=>{
    
    const userbody= req.body;
    const userid=uuid();
    const userwithid={...userbody,id:userid};
    console.log(userbody);
    users.push(userwithid);
    
    res.send(`User with name ${userwithid.firstname}  added succesfully`);
})

// finding attributes  through
router.get('/:id',(req,res)=>{

    const {id} = req.params;
    const found_user = users.find((item)=>item.id==id);

    res.send(found_user);
})
// for delete
router.delete('/:id',(req,res)=>{

    const id = req.params.id;
    users = users.filter((item)=>item.id!=id);
    res.send(`user with  id ${id} deleted successfully`);
    
})

//for patch or update
router.patch('/:id',(req,res)=>{
    const {id} =req.params;
    const {firstname,lastname,age} =req.body;
    const user_update=users.find((item) => item.id ==id);
    if(firstname){
        user_update.firstname=firstname;
    }
    if(lastname){
        user_update.lastname=lastname;
    }
    if(age){
        user_update.age=age;
    }

    res.send(`user with id ${id} updated successfully`);
})

export default router;

