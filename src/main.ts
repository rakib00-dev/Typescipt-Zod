import { z } from 'zod';

const UserSchema = z.object({
  username: z.string(),
  age: z.number().optional(),
  dateOfBirth: z.date().optional(),
  isProgramming: z.boolean().optional(),
});

type User = z.infer<typeof UserSchema>;

const user: User = { username: 'asdf' };
console.log(UserSchema.safeParse(user).success);
