import express from "express";

const app = express();

// Respond to `GET /` requests
app.get("/", (req, res) => {
	console.log("Someone requested my root");
	res.send({ "message": "I AM (G)ROOT" });
});

// Listen for incoming requests
app.listen(3000, () => {
	console.log("Server listening for requests on http://localhost:3000");
});
