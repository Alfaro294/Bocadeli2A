const categoriesController = {};

import categoriesModel from "../models/categoriesModel.js";

// SELECT
categoriesController.getCategories = async (req, res) => {
    try {
        const br = await categoriesModel.find()
        return res.status(200).json(br)
    } catch (error) {
        console.log("Error" + error)
        return res.status(500).json({message: "Internal server error"})
        
    }
}

// INSERT
categoriesController.postCategories = async (req, res) => {
   try {
        let {name, description, isActive} = req.body;
        // Validaciones
        //Sanitizar
        name = name?.trim(); //Borra los espacios al momento de ingresar los datos
        description = description?.trim();

        // Validaciones de datos nulos o require
        if(!name || !description ){
            return res.status(400).json({message: "All fields are required"})
        }
        // Validaciones de tamaño del registro
        if(name.length < 3){
            return res.status(400).json({message: "name too short"})
        }

        const newCategories = new categoriesModel({name, description, isActive})
        await newCategories.save()

        return res.status(201).json({message:"Categories saved"})
   } catch (error) {
        console.log("Error" + error);
        return res.status(500).json({message: "Internal server error"})
    
   }
};

// DELETE
categoriesController.deleteCategories = async (req, res) => {
    try {
        const deleteCategories = await categoriesModel.findByIdAndDelete(req.params.id)
        // Validacion en caso de no ser borrada
        if(!deleteCategories){
            return res.status(404).json({message:"brand not found"})
        }

        return res.status(200).json({message:"Brand deleted"})

    } catch (error) {
        console.log("Error" + error)
        return res.status(500).json({message:"Internal server error"});
    }
};

// UPDATE
categoriesController.updateCategories = async (req, res) => {
    try {
        let {name, description, isActive} = req.body;
         //Sanitizar
        name = name?.trim(); //Borra los espacios al momento de ingresar los datos
        description = description?.trim();

        // Validaciones de tamaño del registro
        if(name.length < 3){
            return res.status(400).json({message: "name too short"})
        }

        // actualizamos
        const updateCategories = await categoriesModel.findByIdAndUpdate(
            req.params.id, {
                name,
                description,
                isActive,}, {new:true
            }
        );
        // Si no se actualiza
        if(!updateCategories){
            return res.status(404).json({message:"brand not found"})
        }
        return res.status(200).json({message : "brand updated"})

    } catch (error) {
        console.log("Error" + error)
        return res.status(500).json({message: "Internal server error"});
    }
};

export default categoriesController;