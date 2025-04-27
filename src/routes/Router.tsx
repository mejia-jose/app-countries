import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import '../App.css';
import '../index.css';
import Loanding from '../layouts/Loanding';
import Home from '../pages/Home';
import NotFound from '../pages/404';

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
            <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div> 
  );
}

export default AppRouter;