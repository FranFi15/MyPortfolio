import React from "react";
import styled from "styled-components";
import Portafolio from "../assets/img/portafolio.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const BannerConatainer = styled.div`
  padding-top: 100px;
  width: 95%;
  height: 75vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: "Big Shoulders Display", cursive;
  z-index: 0;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    padding-top: 0;
  }
`;

const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 500px;
  width: 500px;
  margin: 0;
  padding: 0;
  color: #ffc700;
  z-index: 1;

  h2 {
    font-size: 50px;
    font-weight: 800;
  }
  h3 {
    color: white;
    font-weight: 300;
    font-size: 25px;
  }

  h2,
  h3 {
    margin: 2px 0;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;

    h2 {
      font-size: 30px;
    }
    h3 {
      font-size: 18px;
    }
  }
`;

const BannerImg = styled.img`
  height: 90%;
  width: 30%;
  padding: 0;
  z-index: 1;
  border-radius: 120px 120px 300px 300px;
  object-fit: cover;
  box-shadow: 1px 1px 5px 2px #ffc700;
  @media screen and (max-width: 600px) {
    width: 80%;
    height: 90%;
  }
`;

const BannerSocials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 20px;
  margin: 2px 0;
  z-index: 1;

  span {
    color: #ffc700;
  }

  @media screen and (max-width: 600px) {
    margin-right: 100px;
    span {
      visibility: hidden;
    }
  }
`;

const Socials = styled.a`
  text-decoration: none;
  color: white;
  height: 20px;
  width: 20px;
  padding: 5px;
  transition: 0.5s ease-in-out;
  z-index: 1;

  :hover {
    transform: scale(1.2);
    color: #ffc700;
  }
  @media screen and (max-width: 600px) {
    height: 40px;
    width: 40px;
  }
`;

const Banner = () => {
  return (
    <BannerConatainer>
      <BannerImg src={Portafolio} />
      <ContainerInfo>
        <h2>Hola, soy Francisco Filippa</h2>
        <h3>Frontend Developer | Diseñador y Animador Digital</h3>
        <BannerSocials>
          <span>Conectemos</span>
          <Socials>
            <DoubleArrowIcon />
          </Socials>
          <Socials href="https://www.instagram.com/fran_filippa/">
            <InstagramIcon />
          </Socials>
          <Socials href="https://www.linkedin.com/in/francisco-filippa-1ba2601a8/">
            <LinkedInIcon />
          </Socials>
          <Socials href="https://github.com/FranFi15">
            <GitHubIcon />
          </Socials>
          <Socials href="https://api.whatsapp.com/send?phone=5492915279308">
            <WhatsAppIcon />
          </Socials>
        </BannerSocials>
      </ContainerInfo>
    </BannerConatainer>
  );
};

export default Banner;
