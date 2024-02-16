import { z } from "zod";

export const todoSchema = z.object({
  text: z.string().min(2, "Must be at least 2 characters long."),
});

export type TTodoSchema = z.infer<typeof todoSchema>;
