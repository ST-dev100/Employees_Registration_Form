const Emp = require('../models/Users')

function AllEMp(req,res)
{
 Emp.find().then(e=>console.log(e))
}
module.exports = Emp