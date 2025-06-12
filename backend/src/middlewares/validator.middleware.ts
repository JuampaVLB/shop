import { RequestHandler } from "express";
import { AnyZodObject, ZodError } from "zod";

export const schemaValidation = (schema: AnyZodObject): RequestHandler => {
  return (req, res, next) => {
    try {
      schema.parse({
        body: req.body,
        params: req.params,
        query: req.query,
      });
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json(error.issues.map((issue) => ({ message: issue.message })));
      } else {
        res.status(500).json({ message: 'internal server error' });
      }
    }
  };
};
