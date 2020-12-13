import React from "react"
import Button from '@material-ui/core/Button'
import GitHubIcon from '@material-ui/icons/GitHub'
import VisibilityIcon from '@material-ui/icons/Visibility'


const Card = ({ heading, description, paragraph, imgUrl, projectLink, githubUrl }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl +
          ")",
      }}
    >
      <div className="content">
        <h1 className="header">{heading}</h1>
        <p className="text">{description}</p>
        <p className="text">{paragraph}</p>
          <Button
            variant="contained"
            color="secondary"
            className="btn"
            startIcon={<GitHubIcon />}
            onClick={ () => window.open(githubUrl, "_blank") }
          >
            GitHub
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className="btn"
            startIcon={<VisibilityIcon />}
            onClick={ () => window.open(projectLink, "_blank") }
          >
            Demo
        </Button>
      <div style={{height:"8px"}} />
      </div>
    </div>
  )
}

export default Card
