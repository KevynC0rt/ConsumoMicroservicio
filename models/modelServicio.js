const mongoose=require('mongoose');
mongoose.model('Servicio',{
    
    IDservicio:{
        type:Number,
        requiered:true,
        unique:true
    },
    Nombre:{
        type: String,
        requiered:true,
    
    },
    Costo:{
        type:String,
        requiered:true
    },
    Contenido:{
        type:String,
        requiered:true
    }

});