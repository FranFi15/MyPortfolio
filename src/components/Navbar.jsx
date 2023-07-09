import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  width: 100%;
  background-color: #19232b;
  box-shadow: 0px 3px 2px 0px #ffc700;
  -webkit-box-shadow: 0px 3px 2px 0px #ffc700;
  -moz-box-shadow: 0px 3px 2px 0px #ffc700;
  z-index: 2;

  @media screen and (max-width: 600px) {
    visibility: hidden;
  }
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 50px;
`;
const NavLinks = styled.a`
  text-decoration: none;
  font-family: "Big Shoulders Display", cursive;
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 3px;
  color: #ffc700;
  transition: 0.8s ease-in-out;
  padding: 2px 40px;
  cursor: pointer;

  &:hover {
    color: white;
    transform: scale(1.5);
    text-shadow: 4px 4px 2px black;
    z-index: 3;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavigationContainer>
        <NavLinks href="#acerca">Sobre Mí</NavLinks>
        <NavLinks href="#proyects">Proyectos</NavLinks>
        <NavLinks href="https://drive.google.com/file/d/1zdW1W_quaXt87BNKMcS0cY1op1oRuO4a/view?usp=drive_link">
          CV
        </NavLinks>
        <NavLinks href="#contact">Contáctame</NavLinks>
      </NavigationContainer>
    </NavbarContainer>
  );
};

export default Navbar;
