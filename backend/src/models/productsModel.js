/*
    Campos:
name
description
price
stock
categoryId
isActive

*/

import {Schema, model} from "mongoose";

const productsSchema = new Schema ({
    name :{
        type : String
    },
    description : {
        type : String
    },
    price : {
        type : Number
    },
    stock: {
        type : Number
    },
    CategoryId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "Categories"
    },
    isActive : {
        type : Boolean
    }
},{
    timestamps : true,
    strict : false
}
)

export default model ("Products", productsSchema)

