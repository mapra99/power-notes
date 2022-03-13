import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
);

export default AppRouter;
