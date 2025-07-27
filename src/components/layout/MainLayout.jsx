import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import InitialLoader from '../common/InitialLoader';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';


const MainLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  if (loading) {
    return <InitialLoader/> ;
  }

  return (
    <div>
      <Navbar />
      <main className=' lg:mt-15'>
         <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
