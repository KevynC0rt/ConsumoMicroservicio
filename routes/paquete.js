var express = require('express');
var ruta = express.Router();

var mongoose=require('mongoose');
require('../models/ModelPaquete');
const Paquete=mongoose.model('Paquete');

ruta.get('/',(req,res)=>{
    Paquete.find().then((paquete)=>{
        res.json(paquete);
    }).catch((error)=>{
        if(error)
        throw error;
    });
});
ruta.get('/:IDcliente',(req,res)=>{
    Paquete.findOne(req.params.id).then((paquete)=>{
        res.json(paquete);
    }).catch((error)=>{
        if(error)
        throw error;
    });
});
ruta.post('/',(req,res)=>{
  console.log(req.body);
   var newPaquete={
            IDcliente:req.body.IDcliente,
            IDpaquete:req.body.IDpaquete,
            Adeudo:req.body.Adeudo,
            Estatus:req.body.Estatus
     
}
var Paqu=new Paquete (newPaquete);

Paqu.save().then(()=>{
    console.log("se agrego un Paquete al servicio exitosamente!!");
    res.send("se agrego un cliente a un contrato");

}).catch((error)=>{
        if(error){
            console.log('ocurrio un error al agregar un cliente al servicio');
             throw error;
        }
       
    });


});
ruta.put('/',(req,res)=>{
    Paquete.findOne({IDcliente: req.body.IDcliente }).then((Paquete)=>{
        
        
        console.log(req.body);
        Paquete.Adeudo=req.body.Adeudo;
        Paquete.Estatus=req.body.Estatus;
        
        Paquete.markModified('Adeudo');
        Paquete.markModified('Estatus');
      

        Paquete.save().then(()=>{
                res.send('Se ha modificado el registro del cliente!!');
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
    Paquete.findOneAndRemove(req.params.IDcliente).then(()=>{

        res.send('Eliminando un registro de cliente del servico');
    }).catch((error)=>{
        if(error)
            throw error;
    });
});

module.exports = ruta;