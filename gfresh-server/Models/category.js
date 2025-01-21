const mongoose = require('mongoose');

//Declared the Schema of the Mongo model
var categorySchema = new mongoose.Schema({
    name: {
        type:String,
        require:[true, "name is required"],
        unique: [true, 'name must be unique'],
    },
    url:{
        type:String,
        require:[true, "name is url"],
        unique:true,
        lowercase: true,
    },
    desc:{
        type:String,
        require:[true, "description is required"],
    },
    metatitle:{
        type:String,
        require:[true, "title is required"],
    },
    metadesc:{
        type:String,
        require:[true, "meta description is required"],
    },
    meta_keywords:{
        type:String,
        require:[true, "meta Keywords is required"],
    },
    parentcategory:{
        type:Array,
        require:[],
    },
    attribute:{
        type:Array,
        require:[],
    },
    status:{
        type:String,
        default:"Active",
    },
    banner:{
        type:String,
        default:null
    },
}, {timestamps:true});

//Export the model
module.exports = mongoose.model('Category', categorySchema);