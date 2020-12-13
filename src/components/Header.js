import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import YaoChienHsi_cv from "../files/CV-YaoChienHsi.pdf"
import Button from '@material-ui/core/Button'
import scrollTo from "gatsby-plugin-smoothscroll"


const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h2>
              Hola, soy {data.name}{" "}
              <span role="img" aria-label="Emoji">
              </span>
            </h2>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                {data.headerTagline[0]
                  ? data.headerTagline[0]
                  : "Building digital"}
              </h1>
              {/* <h2>
                {" "}
                {data.headerTagline[1]
                  ? data.headerTagline[1]
                  : <br />}
              </h2> */}
              <br/>
              <h2>
                {" "}
                {data.headerTagline[2]
                  ? data.headerTagline[2]
                  : "and experience"}
              </h2>
            </div>
          </Fade>
          <Fade bottom>
            <p>{data.headerParagraph}</p>
          </Fade>
          <Fade bottom>
          <div style={{display:"flex"}}> 
            <Button
              onClick={() => scrollTo("#contact")}
              className="primary-btn"
            >
              CONTACTAME
            </Button>
            <Button
              onClick={() => window.open(YaoChienHsi_cv, '_blank')}
              className="primary-btn"
            >
              Ver mi CV
            </Button>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
