import { z } from 'zod';

const UserSchema = z.object({
  username: z.string().min(3).max(5),
  age: z.number().default(Math.random()),
  dateOfBirth: z.date().optional(),
  isProgramming: z.boolean().nullish().default(true),
  hobby: z.enum(['Programming', 'Walking', 'Sleeping']),
});

type User = z.infer<typeof UserSchema>;

const user: User = { username: 'dasdf', hobby: 'Programming' };
console.log(UserSchema.parse(user));
