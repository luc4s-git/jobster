import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  Landing,
  Error,
  SharedLayout,
  Register,
  AddJobs,
  AllJobs,
  Profile,
  Stats,
  ProtectedRoute,
} from './pages';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <SharedLayout />
      </ProtectedRoute>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Stats />,
      },
      {
        path: '/all-jobs',
        element: <AllJobs />,
      },
      {
        path: '/add-job',
        element: <AddJobs />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
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
