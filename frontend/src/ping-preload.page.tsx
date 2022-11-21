import { useLoaderData } from 'react-router-dom';
import { ServerStatus } from 'test-backend/src';

export async function loader() {
  return fetch('http://localhost:8080/ping').then(async (res) => (await res.json()) as ServerStatus);
}

export default function PingPreloadPage() {
  const data = useLoaderData() as ServerStatus;
  if (!data) {
    return (
      <>
        <h1>Ping server status</h1>
        <p>Loading...</p>
      </>
    );
  }

  return (
    <>
      <h1>Ping server status</h1>
      <p>Server status: {data.serverStatus}</p>
    </>
  );
}
