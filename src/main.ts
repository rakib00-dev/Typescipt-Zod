import { z } from 'zod';

const useMap = z.map(z.string(), z.object({ name: z.string() }));

const user = new Set([1, 1, 1, 2, 3]);
console.log(user);
