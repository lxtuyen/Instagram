import { AppContext, AppContextType } from '@/contexts/app.context';
import LayoutMain from '@/layouts/LayoutMain';
import { Login } from '@/pages/auth/login';
import { Register } from '@/pages/auth/register';
import Home from '@/pages/home';
import Messages from '@/pages/messages';
import Suggested from '@/pages/suggested';
import Story from '@/pages/story';
import { useContext } from 'react';
import Profile from '@/pages/profile';
import { Navigate, useRoutes } from 'react-router-dom';

export default function useRoutesElements() {
  const { isAuthenticated } = useContext<AppContextType>(AppContext);
 /* const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    return isAuthenticated ? children : <Navigate to='/login' />;
  };*/

  const routeElements = useRoutes([
    { path: '/', element: <LayoutMain sidebar={true} children={<Home />} /> },
    { path: '/messages', element: <LayoutMain sidebar={true} children={<Messages />} /> },
    { path: '/suggested', element: <LayoutMain sidebar={true} children={<Suggested />} /> },
    { path: '/story', element: <LayoutMain sidebar={false} children={<Story />} /> },
    { 
      path: '/login',
      element: isAuthenticated ? <Navigate to='/' /> : <Login />,
    },
    {
      path: '/register',
      element: isAuthenticated ? <Navigate to='/' /> : <Register />,
    },
    {
      path: '/users',
      element: (   
          <LayoutMain sidebar={true} children={<Profile />} />
      ),
    },
    { path: '*', element: <h1>404</h1> },
  ]);

  return routeElements;
}
