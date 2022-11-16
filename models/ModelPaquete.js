const mongoose=require('mongoose');
mongoose.model('Paquete',{
    IDcliente:{
        type: Number,
        required:true,
        unique:true
    },
    IDpaquete:{
        type: Number,
        requiered:true
    },
    Adeudo:{
        type: Number,
        requiered:true,
    
    },
    Estatus:{
        type:String,
        requiered:true
    }

});