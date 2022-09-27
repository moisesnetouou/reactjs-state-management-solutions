import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

export function RequireAuth({ children }: { children: JSX.Element }) {
  const { user } = useAuthStore();

  if (!user.email) {
    return <Navigate to="/" />;
  }
  return children;
}

export function NotRequireAuth({ children }: { children: JSX.Element }) {
  const { user } = useAuthStore();

  if (user.email) {
    return <Navigate to="/dashboard" />;
  }

  return children;
}
