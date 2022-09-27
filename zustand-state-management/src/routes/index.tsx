import { Routes, Route } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { SignIn } from '../pages/SignIn';
import { NotRequireAuth, RequireAuth } from './PermissionLogin';

export function MainRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <NotRequireAuth>
            <SignIn />
          </NotRequireAuth>
        }
      />

      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />
    </Routes>
  );
}
