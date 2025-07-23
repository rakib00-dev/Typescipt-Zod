import { z } from 'zod';

const useMap = z.record(z.string(), z.string());

const user = {
  asdfasdfkl: 'asdlfjkasd',
  po2eiwrusd: '234',
};
console.log(useMap.parse(user));
