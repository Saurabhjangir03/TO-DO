const TODO = require("../modules/todo");

const deletetodo = async (req,res) => {
    try {
          const  responce = await TODO.findByIdAndDelete(req.params.id);
          
           res.status(200).json({
            success : true,
            data : responce,
            message :"successfully deleted"
           })
    } catch (error) {
        res.status(500).json({
            success : false,
            message:error,
        })
        
    }
}
module.exports = deletetodo;