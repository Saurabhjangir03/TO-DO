const TODO  =  require("../modules/todo");

const todocreate = async (req,res) => {
    try {
     const {title,description}  = req.body;
        const todo =  await TODO.create({title,description});
        res.status(200).json({
            success : true,
            data : todo,
            message :"created a  new  to do successfully in your db"
        })
    } catch (error) {
    
    }
}
module.exports = todocreate;