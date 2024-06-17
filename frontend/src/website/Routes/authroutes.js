// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "../web_components/auth/signup/signup";
import LogIn from "../web_components/auth/login/login";
import Home from "../pages/Home";
import UserDetails from "../web_components/auth/userdetails";

export default function AuthRoutes() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="/login" element={<LogIn />}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/userdetails" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}