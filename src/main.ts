import { z } from 'zod';

const Hobbies = ['Programming', 'Walking', 'Sleeping'] as const;

const UserSchema = z.object({
  id: z.string().or(z.number()),
  // id: z.union([z.string(), z.number()]),
});

type User = z.infer<typeof UserSchema>;

const user: User = {
  id: 1,
};
console.log(UserSchema.parse(user));
