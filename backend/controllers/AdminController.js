import jwt from "jsonwebtoken";
import BlogModel from "../models/Blog.js";
import CommentModel from "../models/comment.js";

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return res.json({ success: false, message: "Invalid Credentials" });
    }
    const token = jwt.sign({ email }, process.env.JWT_SECRET);
    res.json({ success: true, token });
  } catch (e) {
    res.json({ success: false, message: e.message });
  }
};

export const getAllBlogsAdmin = async (req, res) => {
  try {
    const blogs = await BlogModel.find({}).sort({ createdAt: -1 });
    res.json({ success: true, blogs });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
//--------------------------------------------------------------------------

export const getAllComments = async (req, res) => {
  try {
    const comments = await CommentModel.find({})
      .populate("blog")
      .sort({ createdAt: -1 });
    res.json({ success: true, comments });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//--------------------------------------------------------------------------

export const getDashboard = async (req, res) => {
  try {
    const recentBlogs = await BlogModel.find({})
      .sort({ createdAt: -1 })
      .limit(5);
    const blogs = await BlogModel.countDocuments();
    const comments = await CommentModel.countDocuments();
    const drafts = await BlogModel.countDocuments({ isPublished: false });

    const dashboardData = {
      recentBlogs,
      blogs,
      comments,
      drafts,
    };
    res.json({ success: true, dashboardData });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
//--------------------------------------------------------------------------

export const deleteCommentById = async (req, res) => {
  try {
    const { id } = req.body;
    await CommentModel.findByIdAndDelete(id);
    res.json({ success: true, message: "Comment deleted successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
//--------------------------------------------------------------------------

export const approveCommentById = async (req, res) => {
  try {
    const { id } = req.body;
    await CommentModel.findByIdAndUpdate(id, { isApproved: true });
    res.json({ success: true, message: "Comment approved  successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
