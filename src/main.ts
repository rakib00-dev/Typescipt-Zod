import { z } from 'zod';

const Hobbies = ['Programming', 'Walking', 'Sleeping'] as const;

const UserSchema = z
  .object({
    username: z.string().min(3).max(5),
  })
  .strict();
// .loose()

type User = z.infer<typeof UserSchema>;

const user: User = {
  username: 'rakib',
  name: 'Muhammad',
};
console.log(UserSchema.parse(user));
