import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import '../App.css';
import '../index.css';
import Loanding from '../layouts/Loanding';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import NotFound from '../pages/404';

/** Permite manejar las rutas de la aplicación **/
function AppRouter() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) { return <Loanding />;} 
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:code" element={<Detail />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div> 
  );
}
export default AppRouter;