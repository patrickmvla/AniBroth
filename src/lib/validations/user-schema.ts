import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "email required!",
  }),
  password: z.string().min(1, {
    message: "password required!",
  }),
});

export const RegisterSchema = z.object({
  username: z.string().min(3, {
    message: "username must be at least 3 characters",
  }),
  email: z.string().email({
    message: "email required!",
  }),
  password: z.string().min(1, {
    message: "password required!",
  }),
});
