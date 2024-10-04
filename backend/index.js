const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./Configuration/Connection');
const UserModel = require('./Models/User');
const RoleModel = require('./Models/Role');
const CategoryModel = require('./Models/Category');
const Router = require("./Routes/AllRoutes");
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const SubcategoryModel = require('./Models/SubCategory');
const ProductModel = require('./Models/Product');
const cloudinary = require('cloudinary').v2;  
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

app.locals.cloudinary = cloudinary;

app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true                 
}));
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/' 
}));

app.use(cookieParser());
app.use(express.json());

connectDB();
UserModel();
RoleModel();
CategoryModel();
SubcategoryModel();
ProductModel();

app.use('/', Router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
