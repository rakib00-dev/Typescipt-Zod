import { z } from 'zod';

enum Hobbies {
  Programming = 'coding',
  Walking,
  Sleeping,
}

const UserSchema = z.object({
  username: z.string().min(3).max(5),
  age: z.number().default(Math.random()).optional(),
  dateOfBirth: z.date().optional(),
  isProgramming: z.boolean().nullish().default(true),
  hobby: z.enum(Hobbies),
});

type User = z.infer<typeof UserSchema>;

const user: User = {
  username: 'dasdf',
  dateOfBirth: new Date(),
  isProgramming: true,
  hobby: Hobbies.Programming,
};
console.log(UserSchema.parse(user));
