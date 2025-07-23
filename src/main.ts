import { z } from 'zod';

const brandEmail = z
  .string()
  .refine((val) => val.endsWith('@rakibdeveloper.com'), {
    error: 'Email Must End @rakibdeveloper.com',
  });

console.log(brandEmail.parse('geasdflo@rakibdeveloper.com'));
