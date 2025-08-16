import fs from "fs";
import imagekit from "./../configs/imagekit.js";
import BlogModel from "./../models/Blog.js";
import CommentModel from "./../models/comment.js";

export const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished } = JSON.parse(
      req.body.blog
    );
    const imageFile = req.file;

    // Check if all fields are present
    if (!title || !description || !category || !imageFile) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }
    const fileBuffer = fs.readFileSync(imageFile.path);

    // Upload image to Imagekit
    const Response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/blogs",
    });

    // Optimization through imageKit Url transformation
    const optimaizedImageUrl = await imagekit.url({
      path: Response.filePath,
      transformation: [
        { quality: "auto" }, // Auto compression
        { format: "webp" }, // Convert to modern format
        { width: 1280 }, // width resizing
      ],
    });

    const image = optimaizedImageUrl;

    await BlogModel.create({
      title,
      subTitle,
      description,
      category,
      image,
      isPublished,
    });

    res.json({ success: true, message: "Blog added successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
//--------------------------------------------------------------------------
// Get all published blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogModel.find();

    res.json({ success: true, blogs });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//--------------------------------------------------------------------------

export const getBlogById = async (req, res) => {
  try {
    const { blogId } = req.params;
    const blog = await BlogModel.findById(blogId);
    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    }
    res.json({ success: true, blog });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
//--------------------------------------------------------------------------

export const deleteBlogById = async (req, res) => {
  try {
    const { id } = req.body;
    const blog = await BlogModel.findByIdAndDelete(id);
    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    }
    res.json({ success: true, message: "Blog deleted successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//--------------------------------------------------------------------------
export const togglePublish = async (req, res) => {
  try {
    const { id } = req.body
    const blog = await BlogModel.findById(id);
    blog.isPublished = !blog.isPublished;
    await blog.save();
    res.json({ success: true, message: "Blog publication status updated" });  
  } catch (error) {
    res.json({ success: false, message: error.message });
    
  }
}

//--------------------------------------------------------------------------

export const addComment = async (req, res) => { 
  try {
    const { blog, name, content } = req.body
    await CommentModel.create({ blog, name, content });
    res.json({ success: true, message: "Comment added for review" });
  } catch (error) {
    res.json({ success: false, message: error.message });
    
  }
}