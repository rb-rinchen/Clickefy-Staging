import { NavLink } from 'react-router-dom';
import services from "../../assets/serviceData.json"
import { assets } from '../../assets/assets';

const Service = () => {
  if (!services || services.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl font-bold text-gray-700">No services available.</p>
      </div>
    );
  }
  return (
    <section className=" mt-8 gradient  bg-gradient-to-r to-[#003973] from-[#E5E5BE]">
    <img src="./src/assets/waves.svg" alt="" className="w-full h-20" />
    <div className="flex gap-2 flex-col items-center">
      <div className="w-13 h-13 rounded-[50%]">
        <img
          src="./src/assets/services.jpg"
          alt=""
          className=" size-full rounded-full object-cover"
        />
      </div>
      <h1 className="font-bold text-white md:text-xl">
        Services We Provide
      </h1>
      <div className="flex gap-2 mb-4">
        <span className="inline-block w-5 h-2 bg-orange-500"></span>
        <span className="inline-block w-5 h-2 bg-blue-500"></span>
      </div>
    </div>
    <div className="grid p-2 lg:grid-cols-2 gap-5 lg:p-10">
      {services.map((service)=>(
        <div key={service.id} className=" border-2 border-gray-400 p-5 w-full md:w-[60%] lg:w-140 mx-auto  bg-white md:flex transition duration-300 shadow-black  gap-3 rounded-xl hover:translate-y-[-8px] hover:shadow-lg">
        <img src={assets.WHO} alt="coverImage" className="w-full h-30 md:w-40 lg:w-50  object-cover"/>
        <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold text-blue-500">{service.title}</h2>
        <p className="text-justify">{service.shortDescription}</p>
        <div className="flex gap-2 items-center group w-30">
          <NavLink to={`/service/${service.id}`} className=" font-bold group-hover:text-orange-500" >View more</NavLink>
          <i className="fa-solid fa-arrow-right mt-1 font-bold text-lg group-hover:translate-x-[3px]"></i>
        </div>
        </div>
       </div>
      ))}
       
    </div>
    <img src="./src/assets/waves.svg" alt="waves" className="w-full h-20 transform rotate-180"/>
  </section>
  )
}

export default Service;
