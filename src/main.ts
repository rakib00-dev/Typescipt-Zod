import { z } from 'zod';

const Hobbies = ['Programming', 'Walking', 'Sleeping'] as const;

const UserSchema = z
  .object({
    username: z.string().min(3).max(5),
    age: z.number().default(Math.random()).optional(),
    dateOfBirth: z.date().optional(),
    isProgramming: z.boolean().nullish().default(true),
    hobby: z.enum(Hobbies),
  })
  .pick({ username: true });

type User = z.infer<typeof UserSchema>;

const user: User = {
  username: 'rakib',
};
console.log(UserSchema.parse(user));
