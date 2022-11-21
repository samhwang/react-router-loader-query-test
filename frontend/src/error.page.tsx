import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError() as any;
  console.error(error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>That is not supposed to happen.</p>
      <p>
        <i>{error.statusText! || error.message}</i>
      </p>
    </div>
  );
}
