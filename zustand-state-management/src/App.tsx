import { BrowserRouter as Router } from 'react-router-dom';

import { MainRoutes } from './routes';
import './styles/main.css';

export function App() {
  return (
    <Router>
      <MainRoutes />
    </Router>
  );
}
