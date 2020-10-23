const mongoose = require('mongoose');

const connectDB = async ()=>{
   const conn = await mongoose.connect('mongodb+srv://bralima_db:bralima@moncluster.nzwuj.mongodb.net/bralima_db?retryWrites=true&w=majority',
   { useNewUrlParser: true,
     useUnifiedTopology: true })
   .then(() => console.log('Connexion à MongoDB réussie !'))
   .catch(() => console.log('Connexion à MongoDB échouée !'));
}

module.exports = connectDB;