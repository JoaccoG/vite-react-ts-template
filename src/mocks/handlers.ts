import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost:4000', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: 'Server ON',
      })
    );
  }),
];

export const errorHandlers = [];
