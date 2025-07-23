import { z } from 'zod';

const promiseSchema = z.promise(z.string());

const promise = Promise.resolve('sdf');
console.log(promiseSchema.parseAsync(promise));
