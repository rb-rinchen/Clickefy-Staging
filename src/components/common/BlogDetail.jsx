import { useParams } from "react-router-dom";
import blogs from '../../assets/blogData.json';
import { useState } from "react";
import { assets } from "../../assets/assets";

const BlogDetail = () => {
  const{id}=useParams();
  const blog = blogs.find((blog) => blog.id === Number(id));
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFaq = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };
  return (
    <div className="container mx-auto mt-11 lg:mt-25 overflow-x-hidden">
       {blog ? (
        <div >
          <div className="bg-black w-full h-100  relative rounded-lg">
                  <div>
                    <img
                      src={assets.analysis}
                      alt="home"
                      className="h-100 w-full object-cover opacity-50 "
                    />
                  </div>
                  <div className="absolute text-white top-10 left-2 lg:inset-20 flex flex-col gap-5 lg:gap-3  w-full ">
                    <h1 className="text-2xl lg:text-5xl">{blog.topic}</h1>
                    <h2 className="text-lg lg:text-xl"><span className="bg-blue-500 py-1 px-2 lg:rounded-xl opacity-90">{blog.quote}</span></h2>
                    <p className="flex gap-1 items-center"><i className="fa-solid text-md fa-user"/><span>{blog.author}</span></p>
                    <p className="flex gap-1 items-center"><i className="fa-solid text-md fa-calendar"/><span>{new Date(new Date()).toLocaleDateString('en-CA').replace(/-/g, '/')}</span></p>
                </div>
            </div>
            {blog.content.map((c,contentIndex)=>(
              <div key={contentIndex} className="text-md lg:text-lg lg:flex gap-4 mt-4 p-2 lg:0">
                {c.image?<div className="mb-3">
                  <img src={assets.digitalMarketing}  className="rounded-md lg:max-w-xl"/>
                </div>:null}
                <div>
                   <h2 className="text-orange-500 font-medium text-3xl">{c.title}</h2>
                   <p className="text-gray-700 mt-3 lg:mt-4">{c.description}</p>
                    <ul className="ml-2 mt-2">
                    {c.bulletPoints.map((point,bulletIndex)=>(
                     <li key={bulletIndex} className="mb-2">
                     {point.head?<span className="font-semibold"><i className="fa-solid fa-check-circle text-blue-700"/> {point.head}:</span>:null}
                     <span className="ml-2">{point.text}</span>
                     </li>
                    ))}
                     </ul>
                </div>
              </div>
            ))}
          <ul className="space-y-4 p-2">
            <li className="text-orange-500 font-medium text-3xl">FAQ'S</li>
          {blog.faqs.map((faq, faqIndex) => (
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
        </div>
       ) : (
        <h1 className="text-3xl mt-30">Blog not found</h1>
       )}
    </div>
  )
}

export default BlogDetail
