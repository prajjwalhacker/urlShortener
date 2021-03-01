const express = require("express");
const app = express();
const shortid = require("shortid");


const port = process.env.PORT || 3000;

const { router, data } = require("./api");



app.use(express.json());

app.listen(port , () => {
    console.log("server has started");
})

app.use(express.static("public"));

app.get("/u/:id", (req, res) => {
      res.redirect(data[req.params.id]);
})

app.use("/api", router);




