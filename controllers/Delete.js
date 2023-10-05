const Emp = require('../models/Users');

function Delete(req,res)
{
  Emp.findOneAndRemove({_id:req.params.id}).then(async(doc) => {
    console.log(doc);
    const emp =await Emp.find();
    res.render('delete')
  })
  .catch(err => {
    console.error(err)
  });
}
module.exports = Delete