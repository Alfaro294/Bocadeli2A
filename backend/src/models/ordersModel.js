/* campos : 
clientId
productsId
total
status
date
*/
import {Schema, model} from "mongoose";

const orderSchema = new Schema({

    customerId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "Customer"
    },
    productsId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "Products"
    },
    total : {
        type : Double
    },
    Status : {
        type : Boolean
    },
    date : {
        type : Date
    }
},{
    timestamps : true,
    strict : false
}
)

export default model ("Orders", orderSchema)