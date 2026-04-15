/* Campos : 
name
lastName
email
password
phone
address
isVerified
*/
import {Schema, model} from "mongoose";

const CustomerSchema = new Schema({
    name:{
        type : String
    },
    lastName : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String 
    },
    phone : {
        type : String
    },
    address : {
        type : String
    },
    isVerified : {
        type : Boolean
    }

    
},
{
    timestamps : true,
    strict : false
})
export default model ("Customer", CustomerSchema)