import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';


import App from './App';
import Error from './pages/Error';
import Home from './pages/home.jsx'; //booksearch page 
import Bookdetails from './pages/Bookdetails.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Mylist from './pages/Mylist.jsx';
import Book from './pages/Book.jsx';
// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/Bookdetails',
        element: <Bookdetails />,
      },
      {
        path: '/Login',
        element: <Login />,
      },
      {
        path: '/Signup',
        element: <Signup/>,
      },
      {
        path: '/Logout',
        element: <Home />,
      },
      {
        path: 'Mylist',
        element: <Mylist />,
      },
      {
        path: 'Book',
        element: <Book />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
