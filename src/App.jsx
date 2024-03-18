import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Landing, Error, Dashboard, Register } from './pages';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    errorElement: <Error />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/landing',
    element: <Landing />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer
        stacked
        position="top-center"
        theme="light"
        autoClose={2000}
      />
    </>
  );
}

export default App;
