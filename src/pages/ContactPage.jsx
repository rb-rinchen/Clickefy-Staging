

const ContactPage = () => {
  return (
    <div>
      <div className="w-full h-90 bg-orange-500 relative flex flex-com items-center justify-center">
        <h1 className="text-4xl text-white font-bold">Contact Us</h1>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40">
          <img
            src="./src/assets/team.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="p-4 justify-center lg:justify-start lg:flex items-center gap-5">
        <img
          src="./src/assets/contact.png"
          alt="contact image"
          className="w-full lg:w-90 h-100 object-contain "
        />
        <div className=" lg:w-150 ">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold">Get In Touch</h1>
            <p>Let us know Your Requiements</p>
          </div>
          <form className="flex flex-col gap-4 mt-4">
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="border-2 border-gray-300 p-2 rounded-md"
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              className="border-2 border-gray-300 p-2 rounded-md"
            />
             <input
              type="text"
              placeholder="Enter Phone Number"
              name="phone"
              className="border-2 border-gray-300 p-2 rounded-md"
            />
            <select name="service"  className="border-2 border-gray-300 p-2 rounded-md" >
              <option value="">Choose a Service</option>
              <option value="Web Development">Web Development</option>
              <option value="seo-web-development">SEO Web Development</option>
              <option value="content-writing">Content Writing</option>
              <option value="graphic-design">Graphic Design</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="Other">Other</option>
             </select>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
              className="border-2 border-gray-300 p-2 rounded-md"
            ></textarea>
            <button type="submit"  className="bg-orange-500 text-white p-2 rounded-md hover:bg-orange-700">
</button>
          </form>
        </div>
        <div className="mt-4">
          <h1 className="text-2xl font-bold">Contact Details</h1>
          <div className="flex gap-2 items-center">
            <i class="fa-solid fa-map-location-dot"></i>
            <p>Tadong,Gangtok,Sikkim</p>
          </div>
          <div className="flex gap-2 items-center">
            <i class="fa-solid fa-envelope"></i>
            <p>rinchen@gmail.com</p>
          </div>
          <div className="flex gap-2 items-center">
            <i class="fa-solid fa-phone"></i>
            <p>91+3312446678</p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3544.8668075220335!2d88.59896767452058!3d27.317356742585968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a504ee70d191%3A0x428f85d42e79aada!2swe%20care%20holidays!5e0!3m2!1sen!2sin!4v1746266798124!5m2!1sen!2sin"
            width="300"
            height="250"
            frameBorder="0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: "0" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
