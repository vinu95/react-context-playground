import { rest } from 'msw';
import { usersList } from './mockResponse';

export const handlers = [
  rest.get('/api/v1/users', (_, res, ctx) => {
    return res(
      ctx.delay(1500),
      ctx.json(usersList),
    );
  }),
];