const Use = require('../models/Users')
async function Edit(req,res)
{
   const use = await Use.findOne({_id:req.params.id})
   res.render('Edit',{use})
}
module.exports = Edit