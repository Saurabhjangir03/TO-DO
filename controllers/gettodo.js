const TODO = require("../modules/todo");

const gettodo = async (req,res) => {
     try {
         const responce  = await TODO.find();  /*find  is  the  method from mongoose */
         res.status(200).json({
        success : true,
        data : responce,
        message : "all todos are fetch"
      })
        
     } catch (error) {
         res.status(500).json({
            success : false,
            message : error
         })
     }
}
// module.exports = gettodo;



// get single  entry 
const gettodobyid = async (req,res) => {
      try{
      const responce = await TODO.findById(req.params.id);
      res.status(200).json({
        success : true,
        data : responce,
        message : "single entry successfully fatching"
      })
      }
      catch(error){
        res.status(500).json({
            success : false , 
            message : error
        })

      }



}
module.exports = {gettodobyid,gettodo};