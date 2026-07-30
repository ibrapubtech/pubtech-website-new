import { useLocation } from 'react-router-dom';

export default function AnimatedRoutes({ children }) {
  const { pathname } = useLocation();
  return (
    <div key={pathname} className="page-transition">
      {children}
    </div>
  );
}
