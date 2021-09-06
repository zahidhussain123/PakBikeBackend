const express= require('express');
const router =express.Router();
const Student =require('../models/student');
// for add id generearte user
const mongoose =require('mongoose');

// get student data
router.get('/',(req,res,next)=>{
  Student.find()
  .exec()
  .then(result=>{
      res.status(200).json({
          studentData:result
      });
  })
  .catch(err=>{
      console.log(err);
      res.status(500).json({
          error:err
      })
  });
});
// get student through id
router.get('/:id',(req,res,next)=>{
     const _id = req.params.id;
    Student.findById(_id)
    .then(result=>{
        res.status(200).json({
            student:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})

// student post datatta
router.post("/", (req, res, next) => {
const student = new Student({
  _id: new mongoose.Types.ObjectId(),
  name: req.body.name,
  gender: req.body.gender,
  email: req.body.email,
  phone: req.body.phone,
});
student.save()
.then(result=>{
    console.log(result);
    res.status(200).json({
        newStudent:result
    })
})
.catch (err=>{
    console.log(err);
    res.status(500).json({
        error:err
    })
})
});
// delete req data
router.delete('/:id', (req, res, next)=>{
 Student.remove({_id:req.params.id})
.then(result=>{
    res.status(200).json({
        message:'student deletedddddd',
        result:result
    })
})
.catch(err=>{
    res.status(500).json({
        error:err
    })
})
})
// put ya update data
router.put('/:id', (req,res,next)=>{
    console.log(req.params.ObjectId);
Student.findOneAndUpdate(
  { _id: req.params.id },
  {
    $set: {
      name: req.body.name, 
      gender: req.body.gender,
      email: req.body.email,
      phone: req.body.phone,
    }
  })
.then(result=>{
    res.status(200).json({
        updatedStudent: result
    })
})
.catch(err=>{
    console.log(err);
    res.status(500).json({
        error:err
    })
})
})



module.exports=router;