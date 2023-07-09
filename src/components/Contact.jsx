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
`;

const Info = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  letter-spacing: 2px;
  color: white;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
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
