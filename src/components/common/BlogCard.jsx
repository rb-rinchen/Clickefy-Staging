import { NavLink } from 'react-router-dom';
import blogs from '../../assets/blogData.json';
import { assets } from '../../assets/assets.js';

const BlogCard = () => {
  return (<>
  {blogs.length === 0 && <h1 className='text-2xl relative left-140 text-gray-500 font-semi-bold'>No Blogs Available</h1>}
    {blogs.map((blog)=>(
            <div key={blog.id} className="border-gray-500 border-2 p-2 lg:p-4 bg-white max-w-100 md:w-90 lg:w-100 shadow-md shadow-gray-300 flex flex-col items-center rounded-xl ">
              <img src={assets.analysis} alt="blog cover image" className="w-full h-40 object-cover rounded-md" />
              <h2 className='mt-2 font-bold text-orange-500'>{blog.topic}</h2>
              <p className="mt-2 text-justify">{blog.shortDescription}</p>
              <NavLink to={`/blog/${blog.id}`} className="hover:text-blue-500 font-bold">read</NavLink>
            </div>
        ))}    
    </>
  )
}

export default BlogCard
