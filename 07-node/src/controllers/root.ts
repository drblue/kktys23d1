import { Request, Response } from "express";

export const handleGetRootRequest = (req: Request, res: Response) => {
	console.log("Someone requested my root");
	res.send({ "message": "I AM (G)ROOT" });
}
