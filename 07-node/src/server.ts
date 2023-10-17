import express from "express";
import { handleGetRootRequest } from "./controllers/root";

const app = express();

// Respond to `GET /` requests
app.get("/", handleGetRootRequest);

// Listen for incoming requests
app.listen(3000, () => {
	console.log("Server listening for requests on http://localhost:3000");
});
