const Blog = require("../models/blogModel.js");
const dotenv = require("dotenv");
const cloudinary = require("../cloudinary");

dotenv.config();

const createBlog = async (req, res) => {
  try {
    const { title, body, image } = req.body;
    if (!title || !body) {
      return res.status(400).json({ message: "Title and body are required" });
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "image",
    });

    const blog = new Blog({
      title,
      body,
      image: result.secure_url,
      createdBy: req.user._id, 
    });

    await blog.save();
    res.status(201).json({ message: "Blog created successfully", blog });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
    createBlog
}
