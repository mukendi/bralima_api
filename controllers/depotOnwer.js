const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const DepotOnwner = require('../models/DepotOnwer');
//const depotOnwer = require('../models/DepotOnwer');


exports.create = (req,res,next) =>{
  const depotOnwner = new DepotOnwer({
   ownerUser : req.body.ownerUser,
   ownerIdImage : req.body.ownerIdImage,
   entrepriseInfo : req.body.entrepriseInfo
  });

  depotOnwner.save().then(
   () =>{
      res.status(201).json({
         message: 'Dépot Onwer enregistre avec success'
      });
   }
).catch(
   (error) =>{
      res.status(400).json({
         error : error
      });
   });
};
/*
exports.delete = (req,res,next) =>{

   depotOnwer.deleteOne({_id : req.params._id}).then(
      () =>{
         res.status(200).json({
            message : 'Depot Onwer supprimer avec success !'
         });
      }
   ).catch(
      (error) =>{
         res.status(400).json({
            error : error
         });
      }
   );
};

exports.update = (req,res,next) =>{

   const depotOnwner = new DepotOnwer({
      ownerUser : req.body.ownerUser,
      ownerIdImage : req.body.ownerIdImage,
      entrepriseInfo : req.body.entrepriseInfo
     });

     depotOnwner.updateOne({_id : req.params._id},depotOnwner).then(
      () =>{
       res.status(201).json({
          message : 'DepotOwner modifier avec success'
       });
      }
   ).catch(
      (error) =>{
         res.status(400).json({
            error : error
         });
      }
   );

};

exports.getOne = (req,res,next) =>{
   depotOnwer.findOne({
      _id : req.params.id
   }).then(
      (depotOnwner) =>{
         res.status(200).json(depotOnwner);
      }
   ).catch(
      (error) =>{
         res.status(404).json({
            error : error
         });
      }
   );
};

exports.getAll() = (req,res,next) =>{
   depotOnwer.find().then(
      (depot) =>{
          res.status(200).json(depot);
      }
   ).catch(
      (error) =>{
         res.status(400).json({
            error : error
         });
      }
   );
};
*/