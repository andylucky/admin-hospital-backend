const mongoose = require('mongoose');





//async hace que la funcion retorne una promesa.
const dbConnection = async() => {
    try {

        // mongodb+srv://zapa:NZGizB6M8tJBMEMB@cluster0.1dkrh.mongodb.net/test
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log("db online")
    } catch (error) {
        console.log("errores")
        throw new Error("error a la hora de iniciar la BD")

    }
}
module.exports = {
    dbConnection
}