import { Routes,Route } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import BlogDetail from './components/common/BlogDetail';
import ServicePage from './pages/ServicePage';


const App = () => {
 
  return (
    <>
<Routes>
  <Route path="/" element={<MainLayout />}>
    <Route index element={<HomePage />} />
    <Route path="about" element={<AboutUs />} />
    <Route path="blogs" element={<BlogPage />} />
    <Route path="/blog/:id" element={<BlogDetail />} />
    <Route path="contact" element={<ContactPage />} />
    <Route path="*" element={<h1 className='text-3xl mt-30'>404 Not Found</h1>} />
    <Route path='/service/:id' element={<ServicePage/>}/>
  </Route>
</Routes>

      <ToastContainer 
        theme="colored"
      />
    </>
  )
}

export default App;
