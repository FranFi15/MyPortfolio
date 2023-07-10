import React from "react";
import styled from "styled-components";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 40vh;

  h2 {
    font-family: "Big Shoulders Display", cursive;
    font-size: 50px;
    color: #ffc700;
  }
  @media screen and (max-width: 600px) {
    margin-top: 350px;
    height: 35vh;

    h2 {
      font-size: 30px;
    }
  }
`;

const Info = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  letter-spacing: 2px;
  color: white;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: space-evenly;
    height: 50%;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
`;

const Contact = () => {
  return (
    <div id="contact">
      <ContactContainer>
        <h2>Contáctame</h2>
        <Info>
          <Item>
            <MailIcon /> franfilippa@live.com
          </Item>
          <Item>
            <WhatsAppIcon fontSize="small" />
            +(54)291 5279308
          </Item>
        </Info>
      </ContactContainer>
    </div>
  );
};

export default Contact;
