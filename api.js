const express = require("express");
const app = express();
const shortid = require("shortid");
const router = express.Router();

const data = {};


router.post('/longurl', (req, res) => {
       
       let id = shortid.generate(); 
       ///console.log(req.body.longurl);
       data[id] = req.body.longurl;
       res.status(201).send({id: id}); 
       
});

module.exports = router;

module.exports = {router, data};
