import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from '../Shared/Auth/SignUp';
import LogIn from '../Shared/Auth/Login';
import Home from '../Website/Pages/Home/Home';
import Blog from '../Website/Pages/Blog/Blog';
import MainProductpg from '../Website/Pages/Product/MainProductpg';
import Contact from '../Website/Pages/Contact/Contact';
import About from '../Website/Pages/About/About';
import Textoverimage from '../Website/Web_Components/TextoverImage/Textoverimage';

const WebsiteRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product" element={<MainProductpg />} />
      <Route path="/about" element={<About/>} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/textoverimage" element={<Textoverimage />} />
    </Routes>
  );
};

export default WebsiteRoutes;
