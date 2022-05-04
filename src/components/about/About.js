import "./About.css"
import UrsuandMe from "../../assests/devhowey_about.jpeg"
import { GiNetworkBars } from "react-icons/gi"
import { GrWorkshop, GrCode } from "react-icons/gr"
// import { IoCodeWorkingSharp } from "react-icons/io"

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know Howey</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={UrsuandMe} alt="Ursula and Michael" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiNetworkBars className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Year Working</small>
            </article>
            <article className="about__card">
              <GrWorkshop className="about__icon" />
              <h5>Students</h5>
              <small>120+ Students Taught</small>
            </article>
            <article className="about__card">
              <GrCode className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p>A Minnesotan in Mexico who enjoys finding patterns in syntax, both in spoken and programming languages. As an English teacher turned software engineer, my perspective allows me to break down challenging concepts for others.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About