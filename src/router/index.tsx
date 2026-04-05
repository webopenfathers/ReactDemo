import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NewWatch from '../pages/newWatch';
import Watch from '../pages/watch';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newWatch" element={<NewWatch />} />
      <Route path="/watch" element={<Watch />} />
    </Routes>
  );
}

export default AppRouter;