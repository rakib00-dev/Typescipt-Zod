import { z } from 'zod';
import { fromZodError } from 'zod-validation-error';

const UserSchema = z.object({
  username: z.string().min(3, 'must be add upto 3 char').max(5),
  friends: z.array(z.string()).optional(),
  coards: z.tuple([z.string(), z.number()]).rest(z.string()),
});

type User = z.infer<typeof UserSchema>;

const user: User = {
  username: '12',
  coards: ['d', 13],
};
const result = UserSchema.safeParse(user);

if (!result.success) {
  console.log(fromZodError(result.error));
}
