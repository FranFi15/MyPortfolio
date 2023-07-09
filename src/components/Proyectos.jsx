import React from "react";
import styled from "styled-components";
import { Pages } from "../data/data";

export const ProyectsContainer = styled.div`
  height: auto;
  width: 100%;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 50px 0;
  height: 80vh;

  h2 {
    font-family: "Big Shoulders Display", cursive;
    font-size: 50px;
    color: #ffc700;
  }
`;

export const PageGrid = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const Page = styled.div`
  height: 250px;
  width: 400px;
  font-size: 25px;
  transition-property: box-shadow;
  transition-duration: 0.1s;
  box-shadow: 0px 0px 2px 0px black;
  cursor: pointer;
  position: relative;
  transition: 0.5s ease-in-out;

  &:hover {
    filter: contrast(100%);
    box-shadow: 0px 0px 15px 0px black;
    transform: scale(1.1);
  }
`;

export const Images = styled.img`
  filter: contrast(50%);
  filter: blur(1px);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: 0.5s ease-in-out;

  &:hover {
    filter: blur(0);
    filter: contrast(100%);
  }
`;

export const Label = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 60px;
  padding: 0;
  margin: 0;
  font-family: "Poppins", sans-serif;
  bottom: 0;
  text-align: center;
  font-size: 15px;
  color: white;
  background-color: #19232b;
  width: 100%;
  position: absolute;
  transition: 0.5s ease-in-out;

  h2 {
    font-family: "Big Shoulders Display", cursive;
    font-weight: 800;
    font-size: 15px;
    margin: 0;
    color: #ffc700;
  }
`;

const Proyectos = () => {
  return (
    <div id="proyects">
      <ProyectsContainer>
        <h2>Proyectos</h2>
        {Object.entries(Pages).map(([sectionName, pages]) => {
          return (
            <>
              <PageGrid>
                {pages.map((page) => (
                  <a href={page.link}>
                    <Page>
                      <Images src={page.img} />
                      <Label>
                        <div>
                          <h2>{page.name}</h2>
                        </div>
                        <div>{page.tecnologias}</div>
                      </Label>
                    </Page>
                  </a>
                ))}
              </PageGrid>
            </>
          );
        })}
      </ProyectsContainer>
    </div>
  );
};

export default Proyectos;
