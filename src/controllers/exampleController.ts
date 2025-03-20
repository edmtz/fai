import { Request, Response } from "express";

export const exampleEndpoint = async (req: Request, res: Response) => {
  res.status(200).json({message: "LA API FUNCIONA"});
};