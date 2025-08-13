import React,{useState} from "react";
import { assets } from './../../assets/assets';

const AddBlog = () => {

  const [image, setImage] = useState(false)
  const [title, setTitle] = useState('')
  const [subTitle, setSubTitle] = useState('')
  const [category, setCategory] = useState('startup')
  const [isPublished, setIsPublished] = useState(false)

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  }
  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll "
    >
      <div className="bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded">
        <p>Upload thumbnail</p>
        <label htmlFor="image">
          <img
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            alt=""
            className="mt-2 h-16 rounded cursor-pointer"
          />
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </label>

        <p className="mt-4">Blog title</p>
        <input
          type="text"
          placeholder="Type here "
          className="outline-none border border-gray-300 rounded mt-2 p-2 max-w-lg w-full "
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        {/* --------- */}

        <p className="mt-4">sub title</p>
        <input
          type="text"
          placeholder="Type  here "
          className="outline-none border border-gray-300 rounded mt-2 p-2 max-w-lg w-full "
          onChange={(e) => setSubTitle(e.target.value)}
          value={subTitle}
        />
        {/* --------- */}
        <p className="mt-4">Blog  Description</p>
        <div clas></div>
      </div>
    </form>
  );
};

export default AddBlog;
