// Skills Icons
import htmlIcon from "./images/htmlIcon.png"
import cssIcon from "./images/cssIcon.png"
import reactIcon from "./images/reactIcon.png"
import jsIcon from "./images/javascriptIcon.png"
import mysqlIcon from "./images/MysqlIcon.png"
import mongoIcon from "./images/mongoDbIcon.png"
import pythonIcon from "./images/pythonIcon.png"
import javaIcon from "./images/javaIcon.png"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import whatsappIcon from "./images/whatsappIcon.png"
import instagramIcon from "./images/instagramIcon.png"
import linkedinIcon from "./images/linkedinIcon.png"

//Project Images
import gfullImg from "./images/gfullPreview.png"
import fundacionPymeImg from "./images/fundacionPymePreview.png"
import aboutImg from "./images/fotoKevin.jpg"
import covid19TrackerImg from "./images/covid19-trackerPreview.png"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "",
  headerTagline: [
    //Line 1 For Header
    "Chien Hsi Yao (Kevin)",
    //Line 2 For Header
    "",
    //Line 3 For Header
    "Desarrollador Front End Freelance",
  ],
  //   Header Paragraph
  headerParagraph:
    "",

  //Contact Email
  contactEmail: "yao.chienhsi@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "G-Full E-Commerce Website", //Project Title - Add Your Project Title Here
      description: "Página E-Commerce para una empresa China, permitiendo agregar productos al carrito y contactar con la empresa.",
      para:
        "Javascript, React, CSS, Material-ui, EmailJS, LazyLoading", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        gfullImg,
      //Project URL - Add Your Project Url Here
      url: "https://yaokevinn.github.io/gfull-website/",
      githubUrl: "https://github.com/YaoKevinn/gfull-website"
    },
    // {
    //   id: 2, //DO NOT CHANGE THIS (Please)😅
    //   title: "Sistema de Validación de Encuestas", //Project Title - Add Your Project Title Here
    //   description: "Proyecto de la facultad dedicado a crear un sistema propio para una empresa que realiza validaciones de encuestas que mandan a diferentes empresas para completar y apartir de los resultados recibidos realizar distintos análisis.",
    //   para:
    //     "JavaScipt, React, CSS, Material-ui, Bootstrap, NodeJS", // Add Your Service Type Here
    //   //Project Image - Add Your Project Image Here
    //   imageSrc: fundacionPymeImg,
    //   //Project URL - Add Your Project Url Here
    //   url: "http://chetanverma.com/",
    // },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "Covid-19 Tracker", //Project Title - Add Your Project Title Here
      description: "Página web para visualizar la situación de la pandemia de todos los paises, con posibilidad de seleccionar un pais especifico. Ver cantidad de casos positivos, recuperados y fallecidos de cada pais.",
      para:
        "JavaScipt, React, CSS, Material-ui, API externo", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: covid19TrackerImg,
      //Project URL - Add Your Project Url Here
      url: "https://YaoKevinn.github.io/Covid19-Tracker",
      githubUrl: "https://github.com/YaoKevinn/Covid19-Tracker"
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
    ,{
        id: 5,
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Me llamo Chien Hsi Yao (Kevin), nací en Taiwán y a los 13 años me vine a vivir a Argentina.",
  aboutParaTwo:
    "Actualmente tengo 24 años y estoy trabajando en el Banco ICBC como Analista de Banca Electrónica. Paralelamente, también estoy trabajando como Desarrollador Front End Freelance.",
  aboutParaThree:
    "Me estoy formando como Ingeniero Informático en la UADE, y además realizo diversos cursos de IT para complementar esta carrera que tanto me apasiona.",
  aboutParaFour:
    "Soy una persona muy trabajadora y proactiva, tengo excelente trato interpersonal con experiencia en trabajo en equipo, y oriento mi trabajo a los resultados esperados.",
  aboutParaFive:
    "Mi objetivo es consolidarme en una empresa donde pueda aplicar todos mis conocimientos como Developer y seguir aprendiendo para poder crecer e innovar en el área de IT.",
  aboutImage:
    aboutImg,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      id: 1,
      img: htmlIcon,
      para:
        "HTML",
    },
    {
      id: 2,
      img: cssIcon,
      para:
        "CSS",
    },
    {
      id: 3,
      img: jsIcon,
      para:
        "JavaScript",
    },
    {
      id: 4,
      img: reactIcon,
      para:
        "React",
    },
    {
      id: 5,
      img: mysqlIcon,
      para:
        "MySQL",
    },
    {
      id: 6,
      img: mongoIcon,
      para:
        "MongoDB",
    },
    {
      id: 7,
      img: pythonIcon,
      para:
        "Python",
    },
    {
      id: 8,
      img: javaIcon,
      para:
        "Java",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, 
      url: "https://github.com/YaoKevinn" },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/chien-hsi-yao-00029717a/",
    },
    {
      img: whatsappIcon,
      url: "https://wa.me/5491161029065",
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/yao_kevinn/",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
