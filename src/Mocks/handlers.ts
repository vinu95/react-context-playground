import { rest } from 'msw';
import { DashboardData, MatchStats, usersList } from './mockResponse';

export const handlers = [
  rest.get('/api/v1/users', (_, res, ctx) => {
    return res(
      ctx.delay(1500),
      ctx.json(usersList),
    );
  }),

  rest.get('/api/v1/dashboard', (_, res, ctx) => {
    return res(
      ctx.delay(1500),
      ctx.json(DashboardData),
    );
    // return res(ctx.status(404));
  }),
  rest.get('/api/v1/match-stats', (_, res, ctx) => {
    return res(
      ctx.delay(1500),
      ctx.json(MatchStats),
    );
  }),
];