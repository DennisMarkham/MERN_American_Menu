require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

const schema = new mongoose.Schema({cat: String, name: String, price: Number})

const Items = mongoose.model("item", schema, "american_menu");

app.get("/getItems", function(req, res){
	async function getItems(){

	await Items.find({}).then((data) => res.json(data))
	}

	getItems();
})

app.get("/getCats", function(req, res){
	async function getCats(){

	await Items.find().distinct("cat").then((data) => res.json(data))
	}

	getCats();
})

app.listen(8000);







