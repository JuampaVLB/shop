import { z } from "zod";

export const updateUserSchema = z.object({
  body: z.object({
    fullname: z.string().min(1).optional(),
    role: z.string().min(1).optional(),
  }).refine(data => data.fullname || data.role, {
    message: "At least one of fullname or role must be provided",
    path: ["fullname", "role"],
  }),
});