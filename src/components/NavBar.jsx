import styled from 'styled-components';
import Logo from '../img/AstonLogo.png'

// Contenedor principal de la barra de navegación
const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;

  background-color: rgba(0, 255, 153, 0.2); 
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  z-index: 1;
  
`;

// Enlace para el logo
const LogoLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-left: 10px;
  
`;
const LogoContainer = styled.div`
  margin: 0 auto;
  height: 190px;
  padding: 0 20px;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    width: 50px; /* Ajusta el ancho del logo para pantallas pequeñas */
  }
`;

///////////////////////////////
const LogoImage = styled.img`
  height: 100%; /* Hacemos que la altura del logo ocupe todo el espacio disponible en el contenedor */
  width: auto; /* Permitimos que el ancho del logo se ajuste automáticamente */
  max-width: 100%; /* Establecemos un ancho máximo para el logo */
`;
//////////////////////////////

// Lista de enlaces de navegación
const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

// Enlaces de la lista de navegación
const NavItem = styled.li`
  margin-left: 20px;
  font-size: 16px;

  a {
    text-decoration: none;
    color: #fff;
  }

  a:hover {
    color: #777;
  }
`;

// Función para renderizar la barra de navegación
const NavBar = () => {
  return (
    <NavContainer>
      <LogoLink href="#">Aston Martin</LogoLink>
      <LogoContainer>
        <a href="#">
        <LogoImage src={Logo} alt="Logo del sitio web" />
        </a>
      </LogoContainer>
      <NavList>
        <NavItem><a href="#">Home</a></NavItem>
        <NavItem><a href="#">Catalogo</a></NavItem>
        <NavItem><a href="#">Acerca de</a></NavItem>
        <NavItem><a href="#">Contacto</a></NavItem>
      </NavList>
    </NavContainer>
  );
};

export default NavBar;

//background-color: #122;