import "./Nav.css";
import { useState } from "react";
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineProject } from "react-icons/ai";
import { FaUserAstronaut } from "react-icons/fa";
import { MdOutlineRoomService, MdOutlineMessage } from "react-icons/md";

const Nav = () => {
  const [active, setActive] = useState('#');


  return (
    <nav>
      <a href="#home" 
        onClick={() => setActive('#')}
        className={active === '#' ? 'active' : ''}>
        <AiOutlineHome />
      </a>
      <a href="#about"
        onClick={() => setActive('#about')}
        className={active === '#about' ? 'active' : ''}>
        <FaUserAstronaut />
      </a>
      <a href="#experience"
        onClick={() => setActive('#experience')}
        className={active === '#experience' ? 'active' : ''}>
        <AiOutlineProject />
      </a>
      <a href="#projects"
        onClick={() => setActive('#projects')}
        className={active === '#projects' ? 'active' : ''}>
        <AiOutlineFundProjectionScreen />
      </a>
      <a href="#services"
        onClick={() => setActive('#services')}
        className={active === '#services' ? 'active' : ''}>
        <MdOutlineRoomService />
      </a>
      <a href="#contact"
        onClick={() => setActive('#contact')}
        className={active === '#contact' ? 'active' : ''}>
        <MdOutlineMessage />
      </a>
    </nav>
  )
}

export default Nav