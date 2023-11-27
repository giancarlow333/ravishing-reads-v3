import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home'
import List from './pages/List.jsx'
import BookDetails from './pages/BookDetails'
import Error from './pages/Error'
import Signup from './pages/Signup.jsx'

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
        path: '/lists',
        element: <List />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/bookdetails', /* FOR TESTING; final is '/book/:bookId', */
        element: <BookDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
