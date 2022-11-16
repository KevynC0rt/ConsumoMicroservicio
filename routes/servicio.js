var express = require('express');
var ruta = express.Router();

var mongoose=require('mongoose');
require('../models/modelServicio');
const Servicio=mongoose.model('Servicio');

ruta.get('/',(req,res)=>{
    Servicio.find().then((servicio)=>{
        res.json(servicio);
    }).catch((error)=>{
        if(error)
        throw error;
    });
});
ruta.get('/:IDServicio',(req,res)=>{
    Servicio.findOne(req.params.id).then((servicio)=>{
        res.json(servicio);
    }).catch((error)=>{
        if(error)
        throw error;
    });
});
ruta.post('/',(req,res)=>{
  console.log(req.body);
   var newServicio={
            IDservicio:req.body.IDservicio,
            Nombre:req.body.Nombre,
            Costo:req.body.Costo,
            Contenido:req.body.Contenido,
     
}
var ser=new Servicio(newServicio);
ser.save().then(()=>{
    console.log("Se agrego un nuevo servicio exitosamente!!");
    res.send("Un nuevo servicio fue creado exitosamente");

}).catch((error)=>{
        if(error){
            console.log('ocurrio un error al agregar el nuevo servicio');
             throw error;
        }
       
    });


});
ruta.put('/',(req,res)=>{
    Servicio.findOne({IDservicio: req.body.IDservicio}).then((servicio)=>{
        
        
        console.log(req.body);
       servicio.Contenido=req.body.Contenido;
        servicio.Costo=req.body.Costo;
   
        
        servicio.markModified('Costo');
        servicio.markModified('Contenido');

        servicio.save().then(()=>{
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

ruta.delete('/:IDservicio',(req,res)=>{
    Servicio.findOneAndRemove(req.params.IDservicio).then(()=>{

        res.send('Eliminando un registro de la tabla servicio');
    }).catch((error)=>{
        if(error)
            throw error;
    });
});

module.exports = ruta;