import { createBrowserRouter } from 'react-router';
import { Landing } from './pages/Landing';
import { NewsListing } from './pages/NewsListing';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Landing,
  },
  {
    path: '/news',
    Component: NewsListing,
  },
]);
