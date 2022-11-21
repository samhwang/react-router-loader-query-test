import { useQuery } from '@tanstack/react-query';
import { ServerStatus } from 'test-backend/src';

function usePingStatus() {
  return useQuery<ServerStatus>({
    queryFn: () => fetch('http://localhost:8080/ping').then((res) => res.json()),
    queryKey: ['ping'],
  });
}

export default function PingPage() {
  const { data } = usePingStatus();

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
