import CTA from "./CTA";
import ME from "../../assests/me&ali.png"
import HeaderSocials from "./HeaderSocials";
import "./Header.css"

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Michael David Howey</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="Michael Howey" />
        </div>
        <a href="" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header