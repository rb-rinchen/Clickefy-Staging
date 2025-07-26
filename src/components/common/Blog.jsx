
import BlogCard from './BlogCard';


const Blog = () => {

  return (
    <section className="gradient bg-gradient-to-tr to-[#74ebd5] from-[#ACB6E5] ">
        <img src="./src/assets/waves2.svg" alt="" className="w-full h-18" />
        <div className="flex gap-2 flex-col items-center">
          <div className="w-13 h-13 rounded-[50%]">
            <img
              src="./src/assets/blog.png"
              alt=""
              className=" size-full rounded-full object-cover"
            />
          </div>
          <h1 className="font-bold text-white md:text-xl">
           Recently Added Blogs
          </h1>
          <div className="flex gap-2 mb-4">
            <span className="inline-block w-5 h-2 bg-orange-500"></span>
            <span className="inline-block w-5 h-2 bg-blue-500"></span>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-center gap-4 p-2 lg:p-4">
           <BlogCard/>
        </div>
        <img src="./src/assets/waves2.svg" alt="" className="w-full h-18 rotate-180"  />
      </section>
  )
}

export default Blog
