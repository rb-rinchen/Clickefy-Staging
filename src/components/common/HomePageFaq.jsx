import { useState } from "react";

const HomePageFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  const faqs = [
    {
      question: "What does a digital marketing agency do?",
      answer:
        "A digital marketing agency helps businesses grow online by using strategies like SEO, social media, paid ads, and content creation to increase visibility, attract leads, and drive sales.",
    },
    {
      question: "What are 7 types of digital marketing?",
      answer:
        "The 7 types of digital marketing include SEO (Search Engine Optimization), PPC (Pay-Per-Click Advertising), Content Marketing, Social Media Marketing, Email Marketing, Influencer Marketing, and Affiliate Marketing.",
    },
    {
      question: "What are the 7 C’s of digital marketing?",
      answer:
        "The 7 C's of digital marketing are Customer, Content, Context, Community, Convenience, Customization, and Conversion.",
    },
  ];

  return (
    <section className="lg:p-8 mt-4 lg:mt-0">
      <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="w-full lg:mx-auto">
        <ul className="space-y-4 text-gray-700">
          {faqs.map((faq, index) => (
            <li key={index} className="p-4 border border-gray-300 rounded-md shadow-sm">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center text-left cursor-pointer"
              >
                <h3 className="text-lg">{faq.question}</h3>
                <i
                  className={`fa-solid fa-angle-down transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                ></i>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                }`}
              >
                <p className="bg-gray-100 p-3  rounded-md">{faq.answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HomePageFaq;
