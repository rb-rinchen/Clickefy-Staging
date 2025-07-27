
const MiniContact = () => {
  return (
    <div className='border-gray-500 shadow shadow-black p-2 bg-white '>
        <h2 className="text-orange-500 text-lg text-bold font-bold text-center">Get Started</h2>
       <form
          className="flex flex-col gap-3 mt-3"
        >
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="border-2 border-gray-300 p-1 focus:outline-gray-500"
            />
            <input
              type="text"
              placeholder="Email"
              className="border-2 border-gray-300 p-1 focus:outline-gray-500"
            />
          </div>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Phone Number"
              name="phone"
              className="border-2 border-gray-300 p-1 focus:outline-gray-500"
            />
            <select name="service"  className="border-1 text-sm md:text-lg border-gray-300 p-1 rounded-md  [&>*]:text-black focus:outline-gray-500" >
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
            cols="10"
            rows="7"
            placeholder="Message"
            className="border-2 border-gray-300 p-2 rounded-md focus:outline-gray-500"
          ></textarea>
          <button
            type="submit"
            className= "bg-orange-500 text-white p-1 rounded-md hover:bg-orange-700"
          >
           <span>
                Submit
            </span> 
          </button>
        </form>
    </div>
  )
}

export default MiniContact;
