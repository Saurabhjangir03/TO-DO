const TODO = require("../modules/todo");

const updatetodo = async (req , res) => {
    try {
           const {title,description}  = req.body;
           const responce = await TODO.findByIdAndUpdate(req.params.id ,{title,description} );
           res.status(200).json({
            success : true,
            data : responce,
            message : "to do item updated successfully"
           })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error,
        })
    }
}

module.exports = updatetodo;