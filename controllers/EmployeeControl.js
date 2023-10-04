const Use = require('../models/Users')
const path = require('path');
async function Emp(req,res)
{
  const emp =await Use.find();
console.log("The Path ",path.dirname(require.main.filename))

  res.render('Home',{emp})
}
module.exports = Emp