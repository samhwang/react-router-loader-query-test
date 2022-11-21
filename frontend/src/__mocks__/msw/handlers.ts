import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost:8080/ping', (req, res, ctx) => {
    console.log({ req, res, ctx });
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        serverStatus: 'working',
      })
    );
  }),
];
