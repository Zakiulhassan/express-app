const routes = require("express").Router();

routes.get("/getusers", (req, res)=>{
    return res.send("Get Users APi")
});

module.exports = routes