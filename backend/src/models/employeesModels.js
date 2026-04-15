/* Campos : 
name
lastName
email
password
role
salary
phone
isVerified

*/

import mongoose, {Schema, model} from "mongoose"; 

const employeesSchema = new Schema ({
    name : {
        type : String
    },
    lastName : {
        type : String
    },
    Salary : {
        type : Number
    },
    phone : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String
    },
    role : {
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
export default model ("Employee", employeesSchema)
