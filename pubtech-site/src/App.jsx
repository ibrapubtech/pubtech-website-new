import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Referenzen from './pages/Referenzen.jsx';
import Jobs from './pages/Jobs.jsx';
import UeberUns from './pages/UeberUns.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import AnimatedRoutes from './components/AnimatedRoutes.jsx';

export default function App() {
  return (
    <>
      <CustomCursor />
      <AnimatedRoutes>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/referenzen" element={<Referenzen />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
        </Routes>
      </AnimatedRoutes>
    </>
  );
}
