import { z } from "zod";

const Agent = z.object({
  id: z.number(),
  name: z.string(),
  avatar: z.string(),
  income: z.number(),
});

export type Agent = z.infer<typeof Agent>;
