const express = require("express");
const router = express.Router();

const todocreate = require("../controllers/todocreate");
const{gettodo,gettodobyid} = require("../controllers/gettodo");
// const gettodobyid = require("../controllers/gettodo");
const updatetodo = require("../controllers/updatetodo");
const deletetodo = require("../controllers/deletetodo")

router.post("/create",todocreate);
router.get("/gettodo", gettodo);
router.get("/:id" ,gettodobyid);
router.put("/update/:id" , updatetodo);
router.delete("/delete/:id" , deletetodo)


module.exports= router;