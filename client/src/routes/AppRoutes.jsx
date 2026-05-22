import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import LandingPage from "../pages/LandingPage";
import BlogsPage from "../pages/BlogsPage";
import BlogDescription from "../pages/BlogDescription";
import CreateBlog from "../pages/CreateBlog";
import Profile from "../pages/Profile";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blogs" element={<BlogsPage/>}/>
        <Route path="/blog-desc" element={<BlogDescription/>}/>
        <Route path="/blog-create" element={<CreateBlog/>}/>
        <Route path="/edit-profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;