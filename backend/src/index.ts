import fastify from 'fastify';
import cors from '@fastify/cors';

const server = fastify();

server.register(cors);

export interface ServerStatus {
  success: boolean;
  serverStatus: 'working' | 'error';
}

server.get('/ping', async (req, res) => {
  console.log({ req, res });
  return {
    success: true,
    serverStatus: 'working',
  };
});

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`Server listening at ${address}`);
});
