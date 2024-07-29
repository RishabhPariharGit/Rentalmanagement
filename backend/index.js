const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./Database/Connection');


const authRoutes = require('./controllers/Authmiddleware');
const protectedRoute = require('./controllers/Protectedroute');
const UserModel = require('./Model/User');

const Router = require("./Routes/AllRoutes");
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();
require('dotenv').config();
const PORT = process.env.PORT;

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true // If your frontend sends cookies
}));


app.use(cors());
app.use(express.json());

connectDB();
UserModel();


app.use('/', Router);

app.use('/auth', authRoutes);
app.use('/protected', protectedRoute);


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});