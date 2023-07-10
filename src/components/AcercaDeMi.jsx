import React from "react";
import styled from "styled-components";
import Html from "../assets/img/html5.svg";
import Css from "../assets/img/css3-alt.svg";
import Reactl from "../assets/img/react.svg";
import Git from "../assets/img/git-alt.svg";
import Github from "../assets/img/github.svg";
import Node from "../assets/img/node.svg";
import Javascript from "../assets/img/square-js.svg";
import Adobe from "../assets/img/icons8-adobe.svg";
import DescriptionIcon from "@mui/icons-material/Description";

const AcercaContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  height: 80vh;
  margin: 50px 0;
  font-family: "Poppins", sans-serif;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
    align-items: center;
    margin: 50px 0;
  }
`;

const Acerca = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 50px;
  width: 600px;
  height: 500px;
  text-align: left;
  color: white;
  letter-spacing: 2px;
  font-size: 17px;

  h2 {
    font-family: "Big Shoulders Display", sans-serif;
    font-size: 50px;
    color: #ffc700;
  }

  h3 {
    color: #ffc700;
  }
  a {
    text-decoration: none;
    color: white;
  }
  a:hover {
    color: #ffc700;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    height: auto;
    margin: 0;
    font-size: 15px;

    h2 {
      font-size: 30px;
    }
  }
`;
const EstudiosContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  flex-direction: column;
  width: 350px;
  height: 500px;
  margin-right: 50px;

  h2 {
    font-family: "Big Shoulders Display", cursive;
    font-size: 50px;
    color: #ffc700;
    letter-spacing: 2px;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    height: auto;
    margin: 50px 0;

    h2 {
      font-size: 30px;
    }
  }
`;

const Tecnologias = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  height: 300px;

  img {
    width: 50px;
    height: 50px;
    margin: 0px 30px 30px 0px;
    transition: 0.3s ease-in-out;
  }
  img:hover {
    transform: scale(1.2);
    filter: drop-shadow(4px 4px 2px #000);
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const AcercaDeMi = () => {
  return (
    <div id="acerca">
      <AcercaContainer>
        <Acerca>
          <h2>¿Quién Soy?</h2>
          <p>
            Soy animador digital y programador Frontend, con experiencia en el
            desarrollo de aplicaciones web y cortos en motion graphics. Tengo
            conocimientos de HTML, CSS, JavaScript, Adobe Illustrator, After
            Effects y Premiere. <br />
            Soy dedicado, responsable y comprometido con mis obligaciones, me
            adapto fácil y rápidamente a diferentes situaciones y grupos de
            trabajo, soy de mente abierta a recibir diferentes opiniones y
            orientaciones. Estoy acostumbrado a trabajar en equipo de forma
            solidaria y colaborativa. <br />
            Estoy buscando oportunidades para seguir aprendiendo y creciendo en
            este campo dinámico y creativo.
            <br />
            <br />
            Aquí te dejo mi CV
            <a href="https://drive.google.com/file/d/1zdW1W_quaXt87BNKMcS0cY1op1oRuO4a/view?usp=drive_link">
              <DescriptionIcon fontSize="large" />
            </a>
          </p>
        </Acerca>
        <EstudiosContainer>
          <h2>Conocimientos</h2>
          <Tecnologias>
            <img src={Html} alt="HTML5" />
            <img src={Css} alt="CSS" />
            <img src={Javascript} alt="JavaScript" />
            <img src={Reactl} alt="React Js" />
            <img src={Node} alt="Node Js" />
            <img src={Git} alt="GIT" />
            <img src={Github} alt="GitHub" />
            <img src={Adobe} alt="Adobe" />
          </Tecnologias>
        </EstudiosContainer>
      </AcercaContainer>
    </div>
  );
};

export default AcercaDeMi;
