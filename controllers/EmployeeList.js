const Emp = require('../models/Users');

async function List(req,res)
{
    const se = req.body
    const FML = req.body.fn;
    Emp.deleteMany({ firstName:"Tamene" }).then(function(){
      console.log("Data deleted"); // Success
  }).catch(function(error){
      console.log(error); // Failure
  });
  
    const users = new Emp({firstName:FML.split(' ')[0],MiddleName:FML.split(' ')[1],
    LastName:FML.split(' ')[2],email: req.body.email,city:req.body.city,gender:req.body.sex});
    users.save().then(doc=>console.log(doc));
    const emp =await Emp.find();
    console.log(Array.isArray(emp))
  res.render("Home",{emp});
}
module.exports = List