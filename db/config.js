const mongoose = require('mongoose');



const dbConnection = async() => {

    try {
        
            mongoose.connect( process.env.BD_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('DB Online');


    } catch (error) {
        console.log(error);
        Error('Error a la hora de inicializad DB');
    }



}


module.exports = {
    dbConnection
}