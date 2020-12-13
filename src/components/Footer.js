import React, { useState, useStyles } from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import Button from '@material-ui/core/Button'
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';



const Footer = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const copyMailToClipboard = (event) => {

    var el = document.createElement('textarea');
    el.value = "yao.chienhsi@gmail.com";
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== 'right' || !prev);
    setPlacement('right');
 }


  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <Fade bottom cascade>
            <h1>Contactame</h1>
            <h2>{data.contactSubHeading}</h2>
          </Fade>
          <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper>
                  <Typography style={{padding: "5px"}}>Mail Copiado!</Typography>
                </Paper>
              </Fade>
            )}
          </Popper>
          <p className="email-link">
            {data.contactEmail}
          </p>
          <Button className="mailCopy-btn" onClick={(event) => copyMailToClipboard(event)}>Click para copiar email</Button>
          <div className="social-icons">
            {data.social.map(socialLink => (
              <a
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialLink.img} alt="icons"></img>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
