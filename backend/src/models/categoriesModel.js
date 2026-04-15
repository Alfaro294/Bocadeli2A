/**Campo:
 * name
description
isActive

 */

import { Schema, model } from "mongoose";

const categoriesSchema =new Schema ({
    name : {
        type : String
    },
    description : {
        type : String
    },
    isActive : {
        type: Boolean
    }
},
{
    timestamps : true,
    strict : false
})

export default model("Categories" , categoriesSchema )