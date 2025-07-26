import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { assets } from "../../assets/assets.js";
import services from "../../assets/serviceData.json"

const Navbar = () => {
  const [showMenuBar, setMenuBar] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showScrollNav, setShowScrollNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollNav(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 const navLinkClass = ({ isActive }) =>
  `p-4 hover:border-blue-700 border-b-2 duration-300 transition-all ${
    isActive ? "border-blue-700" : "border-white"
  }`;

  return (
    <>
      <>
        <header
          className={`hidden lg:block w-full bg-white fixed top-0 left-0 z-30 shadow-md transition-all duration-300 ${
            showScrollNav ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="px-8 flex items-center text-white justify-between bg-orange-500">
            <div className="flex gap-5 text-xl">
               <NavLink to="#"><i className="fa-brands fa-facebook"></i></NavLink>
               <NavLink to="#"><i className="fa-brands fa-instagram"></i></NavLink>
                <NavLink to="#"><i className="fa-brands fa-linkedin"></i></NavLink>
                <NavLink to="#"><i className="fa-brands fa-youtube"></i></NavLink>
            </div>
            <p className="font-semibold text-lg ">Connect With Us</p>
            <p >Call Us Now: 7432808400</p>
          </div>
          <div className=" text-gray-700 text-lg font-bold flex item-center justify-between ">
            <NavLink to="/">
            <img
              src={assets.logo}
              className=" object-contain w-80 "
              alt="clickefy logo"
            />
            </NavLink>
            <ul className="max-w-7xl flex  gap-3  mr-20">
              <NavLink className={navLinkClass} to="/about">
              <li>
                About
              </li>
              </NavLink>
              <li className=" relative group p-4 hover:border-blue-700 border-b-3 border-white duration-300 transition-all">
                Service
                <i
                  className={`fa-solid fa-angle-down ml-2 transform transition-transform duration-300 group-hover:rotate-180`}
                ></i>
                <ul className="absolute top-16 left-[-30px]  shadow-lg w-60  bg-white text-gray-700 transition-translate duration-500  p-4 hidden group-hover:block ">
                  {services.map((service) => (
                    <li
                      key={service.id}
                      className="hover:translate-x-5 duration-500 text-md font-semibold py-1"
                    >
                      <NavLink to={`/service/${service.id}` }>
                        {service.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
              <NavLink to="/blogs" className={navLinkClass}>
              <li >
                Blogs
              </li>
              </NavLink>
               <NavLink to="/contact" className={navLinkClass}>
               <li >
                 Contact Us
              </li>
              </NavLink>
            </ul>
          </div>
        </header>
        <nav
          className={`hidden lg:block fixed top-0 left-0 w-full bg-white z-40 shadow-md transform transition-transform duration-300 ${
            showScrollNav ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className=" text-gray-700 text-lg font-bold flex item-center justify-between">
           <NavLink to="/">
            <img
              src={assets.logo}
              className=" object-contain w-80 "
              alt="clickefy logo"
            />
            </NavLink>
            <ul className="max-w-7xl flex  gap-3 [&>li]:hover:text-orange-500 mr-20">
              <NavLink className={navLinkClass} to="/about">
              <li>
                About
              </li>
              </NavLink>
              <li className=" relative group p-4 hover:border-blue-700 border-b-3 border-white duration-300 transition-all">
                Service
                <i
                  className={`fa-solid fa-angle-down ml-2 transform transition-transform duration-300 group-hover:rotate-180`}
                ></i>
                <ul className="absolute top-16 left-[-30px]  shadow-lg w-60  bg-white text-gray-700 transition-translate duration-500  p-4 hidden group-hover:block ">
                  {services.map((service) => (
                    <li
                      key={service.id}
                      className="hover:translate-x-5 duration-500 text-md font-semibold py-1"
                    >
                      <NavLink to={`/service/${service.id}` }>
                        {service.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
                <NavLink to="/blogs" className={navLinkClass}>
              <li >
                Blogs
              </li>
              </NavLink>
               <NavLink to="/contact" className={navLinkClass}>
               <li >
                 Contact Us
              </li>
              </NavLink>
            </ul>
          </div>
        </nav>
        <nav className=" lg:hidden shadow-md fixed top-0 left-0 w-full bg-white z-40">
           <div className="text-gray-700 text-lg font-bold flex justify-between items-center">
           <NavLink to="/">
            <img
              src={assets.logo}
              className=" object-contain w-70"
              alt="clickefy logo"
            />
            </NavLink>
            <i className="fa-solid fa-bars mr-4" onClick={()=>setMenuBar(true)}/>
              {showMenuBar &&
      <div className="fixed bg-white top-0 left-0 h-full w-35 p-2">
           <p className="font-bold text-lg text-right mb-4" onClick={()=>setMenuBar(false)}>X</p>
            <ul className="flex flex-col items-center  gap-4 mt-5">
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li className="flex gap-1 items-center" onClick={()=>setShowServices(!showServices)}>Our Services
                   {showServices?<span><i className="fa-solid fa-angle-up"/></span>:<span><i class="fa-solid fa-angle-down"/></span>}
                </li>
                  {showServices && (
               <div>
                <ul className="flex flex-col gap-3">
             {services.map((service)=>(
                 <li key={service.id} className="hover:translate-x-5 duration-500 border-l-2 border-blue-500 px-1"><NavLink to={`/service/${service.id}`}>{service.title}
                 
                 </NavLink></li>
            ))}
            </ul>
          </div>
           )}
                <li>
                    <NavLink to="/blogs">Blog</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </div>
        }
          </div>
        </nav>
      </>
    </>
  );
};

export default Navbar;

