import { Outlet } from 'react-router-dom';
import BlogCard from '../components/common/BlogCard';

const BlogPage = () => {
  return (
    <section>
      <div className="w-full h-90 bg-orange-500 relative flex flex-com items-center justify-center">
        <h1 className="text-4xl text-white font-bold">Our Blogs</h1>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40">
          <img
            src="./src/assets/team.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-6 justify-center gap-3 p-2 lg:p-4">
            <BlogCard/>
        </div>
        <Outlet/>
    </section>
  )
}

export default BlogPage;
