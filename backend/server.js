import express from 'express';
import 'dotenv/config'
import cors from 'cors';
import  connectDB  from './configs/db.js';
import AdminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';

const app = express();

await connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

// Routes
app.get("/", (req, res) => {
    res.send("API is working!");
})

app.use('/api/admin', AdminRouter)
app.use("/api/blog", blogRouter);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


export default app;