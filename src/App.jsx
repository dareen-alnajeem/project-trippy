
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'
import { Signup } from './pages/Signup'
import { Route, Routes } from 'react-router-dom'
import NavBar from "./component/NavBar/NavBar"
import { FaHouseChimneyUser } from "react-icons/fa6";
import { IoInformationCircleSharp } from "react-icons/io5";
import { FaToolbox } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";
import Login from './pages/Login'

function App() {
  const navItems = [
    {
      icon: <FaHouseChimneyUser />,
      content: "Home",
      href: "/",
    },
    {
      icon: <IoInformationCircleSharp />,
      content: "About",
      href: "/about",
    },
    {
      icon: <FaToolbox />,
      content: "service",
      href: "/service",
    },
    {
      icon: <MdPermContactCalendar />,
      content: "contact",
      href: "/contact",
    },
  ]
  return (
    <>
      <NavBar
        logo="TRIPPY"
        items={navItems}
        btn="sign up"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
