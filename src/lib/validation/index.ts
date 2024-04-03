import { z } from "zod";


export const SignUpValidation = z.object({
    name:z.string().min(3,{message:"Name too short"}),
    username: z.string().min(3,{message:"Enter atleast 3 characters"}),
    email:z.string().email(),
    password:z.string().min(8,{message:"Password must be atleast 8 characters"})
  });