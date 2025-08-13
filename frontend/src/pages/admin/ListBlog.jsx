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
        
      </div>
    </div>
  )
}

export default ListBlog