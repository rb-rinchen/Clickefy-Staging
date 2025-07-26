import { assets } from "../../assets/assets.js";
const About = () => {
  return (
    <section className="container mx-auto mt-5 lg:mt-10 p-2 lg:p-0">
      <div className="lg:flex gap-10">
          <video 
           autoPlay 
           loop 
        muted 
        className=" w-full lg:w-1/2 h-90 rounded-xl object-cover shadow-lg shadow-gray-400"
      >
        <source src={assets.video} type="video/mp4" />
        
      </video>
        <div className="mt-8 lg:0">
          <h2 className="text-orange-500 text-2xl font-bold">Who Are We?</h2>
          <h3 className="text-blue-800 text-xl font-semibold">
            We’re Clickefy — Your Growth-Obsessed Digital Partners
          </h3>
          <p className="text-gray-700 mt-4 text-md">
            At Clickefy, we’re a team of passionate marketers, creative
            thinkers, and data-driven strategists committed to helping brands
            break through the noise. We blend creativity with performance to
            deliver tailored digital marketing solutions that drive visibility,
            engagement, and revenue.
          </p>
          <p className="text-gray-700 mt-4 text-md">
            Whether you're a startup finding your voice or an established
            business ready to scale, we turn ideas into strategies—and
            strategies into success. With Clickefy, you're not just keeping up
            with digital trends. You're setting them.
          </p>
        </div>
      </div>
      <div className="lg:flex gap-10 mt-15 ">
        <div className="text-gray-700 text-md">
          <h2 className="text-orange-500 text-2xl font-bold">Why Choose Us?</h2>
          <h3 className="text-blue-800 text-xl font-semibold">
            We’re a Team that Delivers More Than Promises
          </h3>
          <p className="mt-4">
            At Clickefy, results aren’t just a goal—they’re a guarantee. Our
            digital marketing strategies are custom-built for growth, backed by
            data, creativity, and relentless optimization. We take the time to
            understand your business, your audience, and your vision—then turn
            that insight into action.
          </p>
          <ul className="mt-4 [&>li]:mt-3">
            <li>✅ Proven ROI-Driven Campaigns</li>
            <li>✅ Transparent Communication & Real-Time Reporting</li>
            <li>✅ Creative Strategy Meets Performance Marketing</li>
            <li>✅ Dedicated Experts, Not Just Account Managers</li>
          </ul>
          <p className="mt-4">Choose Clickefy—not just for clicks, but for lasting impact.</p>
        </div>
        <img
          src={assets.WHO}
          alt="home page image"
          className="object-contain w-full rounded-xl lg:w-1/2 mt-8 lg:mt-0 lg:h-90"
        />
      </div>
    </section>
  );
};

export default About;
