import { z } from 'zod';

const UserSchema = z.object({
  username: z.string().min(3).max(5),
  age: z.number().gt(0),
  dateOfBirth: z.date().optional(),
  isProgramming: z.boolean().nullish(),
});

type User = z.infer<typeof UserSchema>;

const user: User = { username: 'dasdf', age: 1, isProgramming: undefined };
console.log(UserSchema.safeParse(user).success);
