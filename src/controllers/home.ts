import { Request, Response } from "express";

/**
 * GET /
 * Home page.
 */
export const index = (req: Request, res: Response): any => {
  res.write("@typescript-templates/starter-template");
  res.end();
};
