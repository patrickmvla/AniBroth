import { z } from "zod";

export const SearchSchema = z.object({
  query: z.string().min(3, {
    message: "a minimum of 3 characters is required",
  }),
});
