const mongoose=require('mongoose');
const dbConnection=async()=>{
//const dbConnection=()=>{
try{
   await mongoose.connect(process.env.Db_Connection);
    console.log('Base de datos en linea');
    }catch(error){
        console.log(error);
        throw new Error('Error al iniciar la base de datos');

    }
   /* mongoose.connect(process.env.DbConnection);
    console.log('Base de datos en linea'); */
};

module.exports={
    dbConnection
}