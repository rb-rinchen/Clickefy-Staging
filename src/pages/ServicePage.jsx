import Contact from "../components/common/Contact";
import MiniContact from "../components/common/MiniContact";
import WorkingProcess from "../components/common/workingProcess";
import services from "../../src/assets/serviceData.json";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { assets } from "../assets/assets";

const ServicePage = () => {
  const {id}=useParams();
  const service = services.find((s)=>s.id===Number(id));
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFaq = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };
  return (
    <div className="container mx-auto mt-11 lg:mt-25 overflow-x-hidden relative">
       {service ? (
        <div >
          <div className="bg-black w-full h-100  relative rounded-lg">
                  <div>
                    <img
                      src={assets.WHO}
                      alt="home"
                      className="h-100 w-full object-cover opacity-50 "
                    />
                  </div>
                  <div className="absolute text-white top-40 left-6 lg:inset-20 flex flex-col gap-5 lg:gap-3  w-full ">
                    <h1 className="text-2xl lg:text-5xl">{service.title}</h1>
                    <h2 className="text-lg lg:text-xl"><span className="bg-blue-500 py-1 px-2 lg:rounded-xl opacity-90">{service.shortDescription}</span></h2>
                </div>
            </div>
            {service.content.map((c,contentIndex)=>(
              <div key={contentIndex} className="text-md lg:text-lg mt-4 p-2 ">
                <div>
                   <h2 className="text-orange-500 font-medium text-3xl">{c.title}</h2>
                   <p className="text-gray-700 mt-3 lg:mt-4">{c.description}</p>
                    <ul className="ml-2 mt-2">
                    {c.bulletPoints.map((point,bulletIndex)=>(
                     <li key={bulletIndex} className="lg:flex gap-2 mb-2">
                     {point.head?<span className="font-semibold"><i className="fa-solid fa-check-circle text-blue-700"/> {point.head}:</span>:null}
                     {point.text}
                     </li>
                    ))}
                     </ul>
                </div>
              </div>
            ))}
            <div className="mt-8">
              <WorkingProcess/>
            </div>
            <div className="mt-8">
            <Contact/>
            </div>
          <ul className="space-y-4 p-2">
            <li className="text-orange-500 font-medium text-3xl">FAQ'S</li>
          {service.faqs.map((faq, faqIndex) => (
            <li key={faqIndex} className="p-4 border border-gray-300 rounded-md shadow-sm">
              <button
                onClick={() => toggleFaq(faqIndex)}
                className="w-full flex justify-between items-center text-left cursor-pointer"
              >
                <h3 className="text-lg text-gray-700 ">{faq.question}</h3>
                <i
                  className={`fa-solid fa-angle-down transform transition-transform duration-300 ${
                    openIndex ===faqIndex ? "rotate-180" : ""
                  }`}
                ></i>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === faqIndex ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                }`}
              >
                <p className="bg-gray-100 p-3  rounded-md">{faq.answer}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="hidden lg:block absolute top-2 right-2">
           <MiniContact/>
       </div>
        </div>
       ) : (
        <h1 className="text-3xl mt-30">Service not found</h1>
       )}
    </div>
    // <div className="mt-24 container mx-auto p-1 md:p-0 relative">
    //    {service.map((s)=>(
    //     <div key={s._id} className="md:text-lg flex flex-col gap-4">
    //        <div className="relative">
    //         <img src={`http://localhost:3000/uploads/${s.coverImage}`} alt="banner image" className="w-full h-100 object-cover rounded-2xl" />
    //         <div className="absolute top-30  lg:top-25 bg-white/80  w-full md:max-w-150 p-5">
    //         <p className="text-2xl md:text-2xl lg:text-4xl text-orange-500 font-bold">{s.quote}</p>
    //         </div>
    //       </div>
    //       <div>
    //         <p>{s.intro}</p>
    //         {s.content.map((con,index)=>(
    //           <div key={index} className="mt-4">
    //             <h2 className="font-bold text-xl text-blue-500">{con.title}</h2>
    //              {con.description?<p className="mt-4">{con.description}</p>:null}
    //             {con.bulletPoints.length==0?null:(<ul>
    //                 {con.bulletPoints.map((point,index)=>(
    //                     <div className="mt-4" key={index}>
    //                     {point.head?<p className="font-semibold mb-2">{point.head}</p>:null}
    //                     {point.text? <li key={point.id} className=""><i class="fa-regular fa-hand-point-right mr-3"/>{point.text}</li>  :null}
    //                     </div>
    //                 ))}
    //             </ul>)}
    //           </div>
    //         )
    //         )}
    //       </div>
    //        <WorkingProcess/>
    //       <Contact/>
    //       {s.faqs.length==0?null:(
    //         <div className="container mx-auto mt-8">
    //             <h2 className="text-3xl mb-3">Frequently Asked Questions</h2>
    //             {s.faqs.map((faq,index)=>(
    //               <div className="mb-3 border-1 border-gray-300 rounded-md p-4" key={index}>
    //                <div className="flex justify-between items-center cursor-pointer">
    //                <p>{faq.question}</p>
    //                <i  className="fa-solid fa-angle-down"></i>
    //               </div>
    //              <div className={`mt-2 bg-gray-200 p-3 rounded-md`}>
    //             <p>{faq.answer}</p>
    //             </div>
    //          </div> 
    //             ))}
    //         </div>
    //       )}
    //     </div>
    //    ))}
    //    <div className="hidden lg:block absolute top-2 right-2">
    //       <MiniContact/>
    //    </div>
    // </div>
  )
}

export default ServicePage
