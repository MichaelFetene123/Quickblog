import React from 'react'
import { blog_data } from './../../assets/assets';

const ListBlog = () => {

  const [blog, setBlog] = useState([]);
  
  const fetchBlogs = async () => {
    setBlog(blog_data);
  };

  useEffect(() => {
    
  fetchBlogs()
    
  }, [])
  
  return (
    <div className='flex-1 pt-5 sm:pt-12 sm:pl-16 bg-blue-50/50 '>
      <h1>All Blogs</h1>
      <div>
         <div className="relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white">
          <table className="w-full text-sm  text-gray-500">
            <thead className="text-xs text-gray-600 text-left uppercase ">
              <tr>
                <th scope="col" className="px-2 py-4 xl:px-6">#</th>
                <th scope="col" className="px-2 py-4">Blog Title</th>
                <th scope="col" className="px-2 py-4 max-sm:hidden">Date</th>
                <th scope="col" className="px-2 py-4 max-sm:hidden">Status</th>
                <th scope="col" className="px-2 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {dashboardData.recentBlogs.map((blog, index) => (
                <BlogTableItem key={blog._id} blog={blog} fetchBlogs={fetchDashboard} index={index + 1} />
              ))}
             </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ListBlog