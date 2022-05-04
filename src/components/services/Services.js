import "./Services.css";
import { SiCheckio } from "react-icons/si"

const Services = () => {
  return (
    <section id="services">
      <h5>What Can I Do for You?</h5>
      <h2>Services Offered</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <SiCheckio className="service__list-icon"/>
              <p>Band Pages</p>
            </li>
            <li>
              <SiCheckio className="service__list-icon"/>
              <p>Restaurant Pages</p>
            </li>
            <li>
              <SiCheckio className="service__list-icon"/>
              <p>Artist Pages</p>
            </li>
            <li>
              <SiCheckio className="service__list-icon"/>
              <p>Portfolios</p>
            </li>
            <li>
              <SiCheckio className="service__list-icon"/>
              <p>Landing Pages</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <SiCheckio className="service__list-icon" />
              <p>Servers w/ Express.js</p>
            </li>
            <li>
              <SiCheckio className="service__list-icon" />
              <p>Database Admin</p>
            </li>
            <li>
              <SiCheckio className="service__list-icon" />
              <p>Fullstack Development</p>
            </li>
            <li>
              <SiCheckio className="service__list-icon" />
              <p>React Migrations</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Technical &amp; Copy</h3>
          </div>
          <ul className="service__list">
            <li>
              <SiCheckio className="service__list-icon" />
              <p>Blog Maintenance</p>
            </li>
            <li>
              <SiCheckio className="service__list-icon" />
              <p>Content Creation</p>
            </li>
            <li>
              <SiCheckio className="service__list-icon" />
              <p>SEO</p>
            </li>
            <li>
              <SiCheckio className="service__list-icon" />
              <p>Keyword Research</p>
            </li>
            <li>
              <SiCheckio className="service__list-icon" />
              <p>Content Updates</p>
            </li>
            <li>
              <SiCheckio className="service__list-icon" />
              <p>Technial Documentation</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services