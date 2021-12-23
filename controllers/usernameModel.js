const User = require("../schema/serverSchema")

 // FUNCTION TO CONTROL OUR GET AND POST REQUESTS
 

 //ADDING A NEW USER TO OUR DATABASE
 async function addUser(req, res){
try{
  const newUser = await  User.create(req.body);
  res.status(200).json({message: 'User has been created',newUser})
    

  
}catch(error){
    console.log('cannot add new user:  ' , error.message)
    res.status(400).json({mesage:'Failed to add new user'})
}

 //ADDING A NEW USER TO OUR DATABASE

}
 async function getAllUsers(req,res){
   try{
        const user = await User.find();
        res.status(200).json({message:'returm just 3 users', user});
   }catch(error){
console.log('Cannot get data....' ,error.mesage)
   }
}

module.exports={addUser,getAllUsers}