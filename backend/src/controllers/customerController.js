import customerModel from "../models/customerModels.js";

const customerController = {};

// SELECT
customerController.getCustomer = async (req, res) => {
    try {
        const customers = await customerModel.find();
        return res.status(200).json(customers)
    } catch (error) {
        console.log("Error" + error)
        return res.status(500).json({message : "Internal server error"})
    }
};

// DELETE
customerController.deleteCustomer = async (req, res) => {
   try {
    const deletedCustomer = await customerModel.findByIdAndDelete(req.params.id)
    if(!deletedCustomer){
        return res.status(404).json({message: "Customer not found"})
    }

    return res.status(200).json({message : "Customer deleted"})
   } catch (error) {
    console.log("error" + error)
    return res.status(500).json({message : "Internal server error"})
   } 
};

// UPDATE
customerController.updateCustomer = async (req,res) => {
    try {
        let {
            name,
            lastName,
            email,
            password,
            phone,
            address,
            isVerified

        } = req.body;

        // Validaciones
        name = name?.trim();
        email = email?.trim();

        if(name.length < 3 || name.length > 15){
            return res.status(400).json ({message: "Invalid"})
        }
        const updateCustomer = await customerModel.findByIdAndUpdate(req.params.id,{
            name,
            lastName,
            email,
            password,
            phone,
            address,
            isVerified
        },{new : true});

        if(!updateCustomer){
            return res.status(404).json({message: "Customer not found"})
        }

        return res.status(200).json({message:"Customer updated"})

    } catch (error) {
        console.log("error" + error)
        return res.status(500).json({message:"Internal server error"})
    }
};
export default customerController;
