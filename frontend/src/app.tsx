import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import IndexPage from './index.page';
import ErrorPage from './error.page';
import PingPage from './ping.page';
import PingPreloadPage, { loader as pingPreloadLoader } from './ping-preload.page';

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/ping',
    element: <PingPage />,
  },
  {
    path: '/ping-preload',
    element: <PingPreloadPage />,
    loader: pingPreloadLoader,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
