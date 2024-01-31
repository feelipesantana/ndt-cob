import { z } from "zod";

const schemaEnv = z.object({
    NEXT_PUBLIC_API_URL: z.string().url(),
    NEXT_PUBLIC_TOKEN: z.string()
})

export const env = schemaEnv.parse(process.env)