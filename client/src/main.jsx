import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';


import App from './App';
import Error from './pages/Error';
import Home from './pages/Home.jsx'; //booksearch page 
import BookDetails from './pages/BookDetails.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Mylist from './pages/Mylist.jsx';
import Book from './pages/Book.jsx';
import Wishlist from './pages/Wishlist.jsx';
import ReadingList from './pages/ReadingList.jsx';
import AlreadyRead from './pages/AlreadyRead.jsx';
// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: '/books/:bookId',
        element: <BookDetails />,
      },
      {
        path: '/home',
        element: <Home />,
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
        path: 'books',
        element: <Book />,
      },
      {
        path: 'wishlist',
        element: <Wishlist />,
      },
      {
        path: 'readinglist',
        element: <ReadingList />,
      },
      {
        path: 'alreadyread',
        element: <AlreadyRead />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
