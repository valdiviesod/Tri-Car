//Invocamos a la conexion de la DB
const connection = require('../database/db');
//GUARDAR un REGISTRO
exports.save = (req, res)=>{
    const name = req.body.name;
	const last = req.body.last;
	const adress = req.body.adress; 
	const id = req.body.ced;
	const date = req.body.bdate;
	const email = req.body.email;
	const passwd = req.body.pass;
	const placa = req.body.placa;
	const modelo = req.body.modelo;
	connection.query('INSERT INTO users SET ?', {nombre:name, apellido:last, direccion:adress, nacimiento:date, email:email, cedula:id, placa:placa, modelo:modelo ,passwd:passwd}, (error, results) =>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('admin');         
        }
});
};

//ACTUALIZAR un REGISTRO
exports.update = (req, res)=>{
    const id = req.body.id;
    const name = req.body.name;
	const last = req.body.last;
	const adress = req.body.adress; 
	const cedula = req.body.ced;
	const date = req.body.bdate;
	const email = req.body.email;
	const passwd = req.body.pass;
	const placa = req.body.placa;
	const modelo = req.body.modelo;
    connection.query('UPDATE users SET ? WHERE id = ?',[{nombre:name, apellido:last, direccion:adress, nacimiento:date, email:email, cedula:cedula, placa:placa, modelo:modelo ,passwd:passwd}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('admin');         
        }
});
};
