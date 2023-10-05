const Emp = require('../models/Users');

async function List(req,res)
{
    const se = req.body
    const FML = req.body.fn;
   
  
    const users = new Emp({firstName:FML.split(' ')[0],MiddleName:FML.split(' ')[1],
    LastName:FML.split(' ')[2],email: req.body.email,city:req.body.city,gender:req.body.sex});
    users.save().then(doc=>console.log(doc));
    const emp =await Emp.find();
  res.render("Home",{emp});
}
module.exports = List