import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='text-white mt-8'>
        <div className="flex justify-between bg-blue-700 items-center border-t border-gray-300 p-4">
            <p className='font-semibold'>Get connected with us on social networks</p>
            <div className="flex gap-4 text-2xl">
                <NavLink to="#"><i className="fa-brands fa-facebook"></i></NavLink>
                <NavLink to="#"><i className="fa-brands fa-instagram"></i></NavLink>
                <NavLink to="#"><i className="fa-brands fa-linkedin"></i></NavLink>
                <NavLink to="#"><i className="fa-brands fa-youtube"></i></NavLink>
            </div>
        </div>
        <div className='bg-[#1C2331] p-4 border-b border-gray-300 md:flex justify-between'>
            <div className='md:w-1/4 '>
                <h2 className=''>Clickefy</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, dolorem?
                </p>
            </div>
            <div className='mt-4'>
                <h2 className=''>Quick Links</h2>
                <ul className='flex flex-col gap-2'>
                    <li><NavLink to="#">About</NavLink></li>
                    <li><NavLink to="#">Blog</NavLink></li>
                    <li><NavLink to="#">Contact</NavLink></li>
                </ul>
            </div>
            <div className='mt-4'>
                <h2 className=''>Contact Us</h2>
                <div className='flex gap-2 items-center'>
                   <i className="fa-solid fa-map-location-dot"></i>
                   <p>Tadong,Gangtok,Sikkim</p>
                </div>
                <div className='flex gap-2 items-center'>
                <i className="fa-solid fa-envelope"></i>
                   <p>rinchen@gmail.com</p>
                </div>
                <div className='flex gap-2 items-center'>
                   <i className="fa-solid fa-phone"></i>
                   <p>91+3312446678</p>
                </div>
            </div>
        </div>
        <div className='bg-[#161C27] p-4 text-center'>
            <p>© 2023 Clickefy. All rights reserved.</p>
            <p>Designed by Rinchen Bhutia</p>
        </div>
    </footer>
  )
}

export default Footer;
