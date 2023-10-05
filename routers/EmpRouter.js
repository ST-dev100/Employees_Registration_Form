const express = require("express");
const Emp = require('../models/Users')
const Econ = require("../controllers/EmployeeControl")
const EList = require('../controllers/EmployeeList')
const AllEmp = require('../controllers/AllEmployees')
const Edit = require('../controllers/Edit') 
const Delete = require('../controllers/Delete')  
const router = express.Router();

router.get('/',Econ);
// router.get('/employe',AllEmp); 
router.post('/',EList);
router.get('/:id',Delete)
router.get('/edit/:id',Edit)
router.post('/edit/:id',async(req,res)=>{
    const FML = req.body.fn;    

    Emp.findOneAndUpdate({_id:req.params.id},
        {firstName:FML.split(' ')[0],MiddleName:FML.split(' ')[1],
    LastName:FML.split(' ')[2],email: req.body.email,city:req.body.city,gender:req.body.sex},{
        new:true
    }) .then((doc) => {
        // Updated doc returned
        res.redirect('http://localhost:3000/')
      })
      .catch((err) => {
        // Error displayed
        console.error(err);
      });
});



module.exports = router;