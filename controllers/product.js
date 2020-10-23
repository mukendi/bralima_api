const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Product = require('../models/Product');

exports.add = (req,res,next) =>{
   const product = new Product({
      name : req.body.name,
      description : req.body.description,
      photo_url : req.body.photo_url,
      category : req.body.category,
      price : req.body.price,

   });

   product.save().then(
      () =>{
         res.status(201).json({
            message: 'Produit enregistre avec success'
         });
      }
   ).catch(
      (error) =>{
         res.status(400).json({
            error : error
         });
      });
}

exports.getAll = (req,res,next) =>{
   Product.find().then(
      (product) =>{
          res.status(200).json(product);
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
   Product.findOne({
      _id : req.params.id
   }).then(
      (product) =>{
         res.status(200).json(product);
      }
   ).catch(
      (error) =>{
         res.status(404).json({
            error : error
         });
      }
   );
};

exports.delete = (req,res,next) =>{
   Product.deleteOne({_id : req.params._id}).then(
      () =>{
         res.status(200).json({
            message : 'Produit supprimer avec success '
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
   const product = new Product({
      _id : req.params.id,
      name : req.body.name,
      description : req.body.description,
      photo_url : req.body.photo_url,
      category : req.body.category,
      price : req.body.price,

   });
   Product.updateOne({_id : req.params.id},product).then(
      () =>{
       res.status(201).json({
          message : 'Produit modifier avec success'
       });
      }
   ).catch(
      (error) =>{
         res.status(400).json({
            error : "Pas d'autorisation"
         });
      }
   );
};