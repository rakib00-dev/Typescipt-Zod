import { z } from 'zod';

const useMap = z.map(z.string(), z.object({ name: z.string() }));

const user = new Map([
  ['id-23', { name: 'rakib' }],
  ['id-33', { name: 'romayen' }],
]);
console.log(useMap.parse(user));
