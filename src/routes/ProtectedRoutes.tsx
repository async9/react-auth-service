import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

export const ProtectedRoutes: FC<{ redirectPath?: string }> = ({
  redirectPath = '/login',
}) => {
  const accessToken = useAuthStore((state) => state.accessToken);

  if (!accessToken) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};
