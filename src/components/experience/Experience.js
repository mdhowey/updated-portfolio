import { BsBookmarkCheck } from "react-icons/bs";
import "./Experience.css"

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Can I Do?</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          {/* FRONTEND */}
          <h3>Front-end</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsBookmarkCheck className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-small">2+ Years</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheck className="experience__details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-small">2+ Years</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheck className="experience__details-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-small">2+ Years</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheck className="experience__details-icon"/>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-small">2+ Years</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheck className="experience__details-icon"/>
              <div>
                <h4>Sass</h4>
                <small className="text-small">1+ Year</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheck className="experience__details-icon"/>
              <div>
                <h4>React</h4>
                <small className="text-small">1+ Year</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheck className="experience__details-icon"/>
              <div>
                <h4>Flutter</h4>
                <small className="text-small">6 Months</small>
              </div>
            </article>
          </div>
        </div>
        {/* BACKEND */}
        <div className="experience__backend">
          <h3>Back-end</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsBookmarkCheck className="experience__details-icon"/>
              <div>
                <h4>Node JS</h4>
                <small className="text-small">2+ Years</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheck className="experience__details-icon"/>
              <div>
                <h4>MongoDB</h4>
                <small className="text-small">1+ Year</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheck className="experience__details-icon"/>
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-small">1+ Year</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheck className="experience__details-icon"/>
              <div>
                <h4>Python</h4>
                <small className="text-small">2+ Years</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheck className="experience__details-icon"/>
              <div>
                <h4>Django</h4>
                <small className="text-small">1+ Year</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;