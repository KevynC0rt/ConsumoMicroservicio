var express = require('express');
var ruta = express.Router();

var mongoose=require('mongoose');
require('../models/modelCliente');
const Cliente=mongoose.model('Cliente');

ruta.get('/',(req,res)=>{
    Cliente.find().then((cliente)=>{
        res.json(cliente);
    }).catch((error)=>{
        if(error)
        throw error;
    });
});
ruta.get('/:IDcliente',(req,res)=>{
    Cliente.findOne(req.params.id).then((clientes)=>{
        res.json(clientes);
    }).catch((error)=>{
        if(error)
        throw error;
    });
});
ruta.post('/',(req,res)=>{
  console.log(req.body);
   var newCliente={
            IDcliente:req.body.IDcliente,
            Nombre:req.body.Nombre,
            Apellidos:req.body.Apellidos,
            Edad:req.body.Edad,
            telefono:req.body.telefono,
            direccion:req.body.direccion
}
var clien=new Cliente(newCliente);
clien.save().then(()=>{
    console.log("Se agrego un nuevo cliente exitosamente!!");
    res.send("Un nuevo cliente fue creado exitosamente");

}).catch((error)=>{
        if(error){
            console.log('ocurrio un error al agregar el nuevo cliente');
             throw error;
        }
       
    });


});
ruta.put('/',(req,res)=>{
    Cliente.findOne({IDcliente: req.body.IDcliente }).then((cliente)=>{
        
        
        console.log(req.body);
        cliente.Nombre=req.body.Nombre;
        cliente.Apellidos=req.body.Apellidos;
        cliente.Edad=req.body.Edad;
        cliente.Telefono=req.body.Telefono;
        cliente.Direccion=req.body.Direccion;

        cliente.markModified('Nombre');
        cliente.markModified('Apellidos');
        cliente.markModified('Edad');
        cliente.markModified('Telefono');
        cliente.markModified('Direccion');

        cliente.save().then(()=>{
                res.send('El cliente ha sido modificado!!');
        }).catch((error)=>{
            if(error)
                throw error;
        });
    }).catch((error)=>{
        if(error)
            throw error;
    });

});

ruta.delete('/:IDcliente',(req,res)=>{
    Cliente.findOneAndRemove(req.params.IDcliente).then(()=>{

        res.send('Eliminando un registro de cliente');
    }).catch((error)=>{
        if(error)
            throw error;
    });
});

module.exports = ruta;
