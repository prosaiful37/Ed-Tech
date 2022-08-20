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
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="">
     <Header></Header>
      <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/courses" element={<Courses></Courses>}></Route>
          <Route path="/blog" element={<Blogs></Blogs>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
      </Routes>

     <Footer></Footer>
    </div>
  );
}

export default App;
