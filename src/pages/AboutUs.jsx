
const AboutUs = () => {
  return (
    <div>
      <div className="w-full h-90 bg-orange-500 relative flex flex-com items-center justify-center">
        <h1 className="text-4xl text-white font-bold">About Us</h1>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40">
          <img
            src="./src/assets/team.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="md:p-8 lg:p-16">
        <div className="lg:max-w-8xl mx-auto bg-white shadow-lg rounded-lg p-4 lg:p-6">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-orange-500">
            Who We Are
          </h2>
          <p className="mt-4 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam, voluptatibus.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi error ut reprehenderit laboriosam dicta illum minus, sunt incidunt nobis nihil dolor, natus consequatur magni sit? Natus vero architecto dolore dolor.
          </p>
        </div>
        <div className="max-w-8xl mx-auto bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-orange-500 mt-8">
                Our Mission
            </h2>
            <p className="mt-4 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quisquam, voluptatibus.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi error ut reprehenderit laboriosam dicta illum minus, sunt incidunt nobis nihil dolor, natus consequatur magni sit? Natus vero architecto dolore dolor.
            </p>
        </div>
        <div className="max-w-8xl mx-auto bg-white shadow-lg rounded-lg p-6" >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-orange-500 mt-8">
                Our Vision
            </h2>
            <p className="mt-4 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quisquam, voluptatibus.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi error ut reprehenderit laboriosam dicta illum minus, sunt incidunt nobis nihil dolor, natus consequatur magni sit? Natus vero architecto dolore dolor.
            </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
