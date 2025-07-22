import { z } from 'zod';

const UserSchema = z.object({
  username: z.string().min(3).max(5),
  age: z.number().default(Math.random()),
  dateOfBirth: z.date().optional(),
  isProgramming: z.boolean().nullish().default(true),
});

type User = z.infer<typeof UserSchema>;

const user: User = { username: 'dasdf' };
console.log(UserSchema.safeParse(user).data);
