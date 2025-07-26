

const Contact = () => {
  return (
    <div className="lg:flex items-center mt-4 lg:mt-0 justify-center gap-5 p-2 lg:p-4 text-gray-700">
      <div className="w-full lg:w-1/3 lg:ml-10 flex flex-col gap-2">
        <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl text-orange-500">
          <i>Let take your business from 1X to 10x</i>
        </h3>
        <p className="font-bold text-xl  text-blue-800 ">
          Your Growth Journey Starts Here.
        </p>
        <p>
          Looking to increase traffic, boost conversions, or build a brand that
          stands out? You’re in the right place. At Clickefy, we turn bold ideas
          into real digital growth.
        </p>
        <p>
          Tell us what you need—and we’ll show you how we can make it happen.
        </p>
        <ul>
          <li>✅ 100% Tailored Strategies</li>
          <li>✅ Dedicated Experts</li>
          <li>✅ Results You Can Measure</li>
        </ul>
      </div>
      <div className="bg-black text-white lg:p-4 p-2 rounded-lg shadow-lg mt-4 w-full md:mx-auto lg:w-[45%]">
        <h1 className="text-2xl font-bold  text-center">Contact Us</h1>
        <form
          className="flex flex-col gap-3 mt-3"
        
        >
          <div className="flex flex-col lg:flex-row gap-3">
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="border-2 border-gray-300 p-2 rounded-md lg:w-1/2"
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              className="border-2 border-gray-300 p-2 rounded-md lg:w-1/2"
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-3">
            <input
              type="text"
              placeholder="Phone Number"
              name="phone"
              className="border-2 border-gray-300 p-2 rounded-md lg:w-1/2"
            />
            <select
              name="service"
              className="border-2 text-sm  border-gray-300 p-2 rounded-md lg:w-1/2 [&>*]:text-black"
            >
              <option value="">Choose a Service</option>
              <option value="Web Development">Web Development</option>
              <option value="seo-web-development">SEO Web Development</option>
              <option value="content-writing">Content Writing</option>
              <option value="graphic-design">Graphic Design</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Message"
            className="border-2 border-gray-300 p-2 rounded-md h-40 lg:h-auto"
          ></textarea>
          <button
            type="submit"
            className={`
              "bg-orange-500 text-white p-2 rounded-md hover:bg-orange-700"
            `}
          >
              <span>
                <i className="fa-solid fa-spinner animate-spin"></i>
                Submit
              </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
