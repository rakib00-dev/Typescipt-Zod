import { z } from 'zod';

const Hobbies = ['Programming', 'Walking', 'Sleeping'] as const;

const UserSchema = z.object({
  username: z.string().min(3).max(5),
  friends: z.array(z.string()).optional(),
  coards: z.tuple([z.string(), z.number()]).rest(z.string()),
});

type User = z.infer<typeof UserSchema>;

const user: User = {
  username: 'rakib',
  coards: ['d', 13],
};
console.log(UserSchema.parse(user));
