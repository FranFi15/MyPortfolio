import React from "react";
import styled from "styled-components";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Info = styled.div`
  display: flex;
  margin-left: 20px;
  align-items: center;
  align-self: flex-start;
  color: white;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 12px;

  @media screen and (max-width: 768px) {
    font-size: 9px;
    justify-content: center;
    margin: 0;
    background-color: black;
  }
`;

const Footer = () => {
  return (
    <div>
      <Info>
        <CopyrightIcon fontSize="small" />
        2023 Francisco Filippa
      </Info>
    </div>
  );
};

export default Footer;
