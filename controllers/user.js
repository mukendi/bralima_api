const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

//Enregistrement de l 'Utilisateur

exports.createUser = (req,res,next) =>{
 bcrypt.hash(req.body.password,10)
       .then(hash =>{
         const user = new User({
            name : req.body.name,
            fistname : req.body.fistname,
            phone : req.body.phone,
            password : hash,
            photo_url : req.body.photo_url,
            sexe : req.body.sexe,
        
         });
         
 user.save().then(
   () =>{
      res.status(201).json({
         message: 'Utilisateur enregistre avec success'
      });
   }
).catch(
   (error) =>{
      res.status(400).json({
         error : error
      });
   }
);
       });
 

};

exports.getOneUser = (req,res,next) =>{
   User.findOne({
      _id : req.params.id
   }).then(
      (user) =>{
         res.status(200).json(user);
      }
   ).catch(
      (error) =>{
         res.status(404).json({
            error : error
         });
      }
   );
};

exports.modifyUser = (req,res,next) =>{
   const user = new User({
      _id : req.params._id,
      name : req.body.name,
      fistname : req.body.fistname,
      phone : req.body.phone,
      password : req.body.password,
      photo_url : req.body.photo_url,
      sexe : req.body.sexe
   
   });

   User.updateOne({_id : req.params._id},user).then(
      () =>{
       res.status(201).json({
          message : 'Utilisateur modifier avec success'
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

exports.deleteUser =  (req,res,next) =>{
  User.deleteOne({_id : req.params._id}).then(
     () =>{
        res.status(200).json({
           message : 'Utilisateur supprimer avec success !'
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


exports.getAllUser = (req,res,next) =>{
 User.find().then(
    (users) =>{
        res.status(200).json(users);
    }
 ).catch(
    (error) =>{
       res.status(400).json({
          error : error
       });
    }
 );
};

exports.login = (req, res, next) =>{
   User.findOne({phone : req.body.phone})
       .then(user =>{
         if(!user){
            return res.status(401).json({error : 'Numéro de téléphone non trouvé !'});
         }
         bcrypt.compare(req.body.password,user.password)
               .then(valid =>{
               if(!valid){
                  return res.status(401).json({error : 'Mot de passe incorrect !'});
               }
               res.status(200).json({
                  userId : user._id,
                  token : jwt.sign({
                     userId : user._id
                  },
                  'RANDOM_TOKEN_SECRET',
                  {expiresIn : '24h'})
               });
               }).catch(error => res.status(500).json({ error : "X" }));
       }).catch(error => res.status(500).json({ error : "Y" }));
}

