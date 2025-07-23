import { z } from 'zod';

const Hobbies = ['Programming', 'Walking', 'Sleeping'] as const;

const UserSchema = z.object({
  username: z.string().min(3).max(5),
  friends: z
    .array(z.string())
    .default(['afonaf', 'kanon', 'shohag', 'rohan', 'shimul', '2akash']),
});

type User = z.infer<typeof UserSchema>;

const user: User = {
  username: 'rakib',
};
console.log(UserSchema.parse(user));
