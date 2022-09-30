import React from "react";
import css from "./Home.module.css";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import ReactPlayer from 'react-player'
import pdf from "../pdf/David_López_Valdes_-_Full_Stack_Developer(1).pdf"
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const actions = [
    { icon: <GitHubIcon />, name: 'GitHub' ,redirect: "https://github.com/Davlopez06" },
    { icon: <LinkedInIcon />, name: 'LinkedIn', redirect: "https://www.linkedin.com/in/david-lopez-valdes-310630233/" }
  ];

export default function Home(){
    const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleRedirect=(url)=>{
    window.location.href = url;
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
        <div className={css.home}>
        <AppBar position="static" className={css.navbar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LaptopChromebookIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PORTFOLIO
          </Typography>

          <LaptopChromebookIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PORTFOLIO
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
    <div className={css.portada}>
        <h2 className={css.titulo}>Hola !!, Soy David Lopez</h2>
        <h5 className={css.subtitulo}>Medellin, Colombia</h5>
    </div>
    <div className={css.about}>
        <p className={css.letra}>Full Stack Developer con formación como Diseñador Web. Experiencia trabajando en NodeJS, React,
Redux, SQL entre otras tecnologías del sector. Participe en la creación de un E-commerce para la compra de películas de diferentes plataformas de streaming sin suscripción. Con pensamiento creativo, resolución de problemas, trabajo en equipo, comunicación y autonomía.
</p>
    </div>
    <div className={css.abilities}>
        <h2 className={css.abititle}>Tecnologias:</h2>
        <ul className={css.list}>
            <li className={css.listItem}>HTML</li>
            <li className={css.listItem}>CSS</li>
            <li className={css.listItem}>Javascript</li>
            <li className={css.listItem}>React</li>
            <li className={css.listItem}>Redux</li>
            <li className={css.listItem}>Node.js</li>
            <li className={css.listItem}>Express</li>
            <li className={css.listItem}>Postgres</li>
            <li className={css.listItem}>Mongo</li>

        </ul>
    </div>
    <div className={css.proyect}>
        <h2 className={css.protitle}>Proyectos:</h2>
        <div className={css.proyec}>
            <h3 className={css.proytitle}>Full Stack Web Developer - Food App	</h3>
            <h4 className={css.prosubtile}>Henry Bootcamp, Buenos Aires, Argentina. </h4>
            <h5 className={css.date}>agosto 1 - agosto 17</h5>
            <ul className={css.list}>
                <li className={css.proylistitem}>Diseñar y desarrollar una App de recetas que incluía: búsquedas, filtrados, ordenamientos y creación</li>
                <li className={css.proylistitem}>Desarrollar la app usando para el Front React, Redux, CSS puro y Back desarrollado en Node.js con Express. Base de datos en PostgreSQL y Sequelize.</li>

            </ul>
            <ReactPlayer url='https://vimeo.com/752749566'
          className='react-player'
          playing
          width='60vw'
          height='60vh'/>
            <a href="https://github.com/Davlopez06/PI-FOOD" className={css.repo}>Repositorio</a>
        </div>
        <div className={css.proyec}>
            <h3 className={css.proytitle}>Full Stack Web Developer - HMovies App	</h3>
            <h4 className={css.prosubtile}>Henry Bootcamp, Buenos Aires, Argentina. </h4>
            <h5 className={css.date}>agosto 29 - septiembre 22</h5>
            <ul className={css.list}>
                <li className={css.proylistitem}>Diseñar y desarrollar un  E-commerce  que incluía: búsquedas, filtrados, ordenamientos y creación, Login, métodos de pago, eliminación. 
</li>
                <li className={css.proylistitem}>Desarrollar la app usando para el Front React, Redux, CSS puro y Back desarrollado en Node.js con Express. Base de datos en Mongodb y Sequelize.</li>

            </ul>
            <ReactPlayer url='https://www.youtube.com/watch?v=keG8ClPjraA'
          className='react-player'
          playing
          width='60vw'
          height='60vh'/>
            <a className={css.repo} href="https://github.com/Davlopez06/PF-Deploy-HMovies?organization=Davlopez06&organization=Davlopez06">Repositorio</a>
        </div>
        <div className={css.experience}>
        <h2 className={css.extitle}>Experiencia profecional:</h2>
        <div className={css.exproyec}>
            <h3 className={css.exxtitle}>Front-End Developer	</h3>
            <h4 className={css.exsubtile}>H2A Group, Medellín, Colombia. </h4>
            <h5 className={css.exdate}>oct. 27 - abr. 26.</h5>
            <ul className={css.list}>
                <li className={css.exlistitem}>Elaboración de páginas web de publicidad de productos o servicios de los clientes </li>
                <li className={css.exlistitem}>Envíos de informes sobre la productividad de los servicios ofrecidos a los clientes </li>

            </ul>
        </div>
        </div>
        <div className={css.education}>
        <h2 className={css.edtitle}>Educacion:</h2>
        <div className={css.edproyec}>
            <h3 className={css.eddtitle}>Systems enginee</h3>
            <h4 className={css.edsubtile}>Instituto Tecnologico Metropolitano, Medellín, Colombia. </h4>
            <h5 className={css.eddate}>2019 - 2025.</h5>
            <ul className={css.list}>
                <li className={css.edlistitem}>Carrera de ingenieria de sistemas</li>
            </ul>
        </div>
        <div className={css.edproyec}>
            <h3 className={css.eddtitle}>Full Stack Developer</h3>
            <h4 className={css.edsubtile}>Henry, Buenos Aires, Argentina </h4>
            <h5 className={css.eddate}>2022.</h5>
            <ul className={css.list}>
                <li className={css.edlistitem}>Bootcamp de henry en el cual se aprenden las tecnologias PERN de full stack y se realizan proyectos web full stack</li>
            </ul>
        </div>
        </div>
        <div className={css.idioma}>
        <h2 className={css.idtitle}>Ingles A2</h2>
        </div>
        <div className={css.cv}>
        <h2 className={css.cvtitle}>Aqui mi CV</h2>
        <button className={css.btn}>
            <a  className={css.btna} href={pdf} target="_blank" rel="noopener noreferrer" download="cv_David_Lopez.pdf"> 
                Click here for my cv
            </a>
        </button>
        <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 10, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={()=>handleRedirect(action.redirect)}
          />
        ))}
      </SpeedDial>
    </Box>
        </div>
    </div>
    </div>
    )
}