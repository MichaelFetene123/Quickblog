import fs from 'fs';
import imagekit from './../configs/imagekit.js';

export const addBlog = async (req, res) => { 
    try {
        const { title, subTitle, description, category, image, isPublished } = JSON.parse(req.body.Blog);
        const imageFile = req.file;
        
        // Check if all fields are present
        if(!title || !description || !category || !imageFile || isPublished ) {
            return res.status(400).json({ success: false, message: 'Missing required fields' });
        }
        const fileBuffer = fs.readFileSync(imageFile.path);

        // Upload image to Imagekit
        const Response = await imagekit.upload({
          file: fileBuffer,
            fileName: imageFile.originalname,
          folder:'/blogs'
        });

      
        
    } catch (error) {
        
    }
}