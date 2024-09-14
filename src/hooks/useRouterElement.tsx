import { AppContext, AppContextType } from '@/contexts/app.context';
import LayoutMain from '@/layouts/LayoutMain';
import { Login } from '@/pages/auth/login';
import { Register } from '@/pages/auth/register';
import Home from '@/pages/home';
import Messages from '@/pages/messages';
import Suggested from '@/pages/suggested';
import Story from '@/pages/story';
import { useContext } from 'react';
import MyProfile from '@/pages/user/myProfile';
import OtherProfile from '@/pages/user/otherProfile';
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
      path: '/profile',
      element: (   
          <LayoutMain sidebar={true} children={<MyProfile />} />
      ),
    },
    {
      path: '/profiles',
      element: (   
          <LayoutMain sidebar={true} children={<OtherProfile />} />
      ),
    },
    { path: '*', element: <h1>404</h1> },
  ]);

  return routeElements;
}
