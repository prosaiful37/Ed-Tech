import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Blogs from "./Components/Blogs/Blogs";
import Header from "./Components/Shared/Header/Header";
import Footer from "./Components/Shared/Footer/Footer";
import Courses from "./Components/Courses/Courses";
import Login from "./Components/Login/Login/Login";
import Signup from './Components/Login/Register/Signup';
import RequireAuth from "./Components/Login/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="">
     <Header></Header>
      <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/services" element={
            <RequireAuth>
              <Services></Services>
            </RequireAuth>
          }>

          </Route>
          <Route path="/courses" element={<Courses></Courses>}></Route>
          <Route path="/blog" element={<Blogs></Blogs>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>

     <Footer></Footer>
    </div>
  );
}

export default App;
