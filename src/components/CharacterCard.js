import React from "react";
import styled from "styled-components";
import img from './rmbackgroundimage.jpg';


const StyledDiv = styled.div`
  margin: 50px auto;
  width: 50%;
  text-align: center;
  border: black 7px solid;
  height: auto;
  border-radius: 1px;
  font-family: Times;
  box-shadow: 0 56px 38px rgba(0, 0, 0, 0.3), 0 47px 17px rgba(0, 0, 0, 0.22);
  overflow: hidden;
  &:hover {
  background-color: green;
  background-image: url(${img});
  background-size: cover;
  }
`;

const CharacterCard = props => {
  return (
    <StyledDiv>
      <h1>{props.name}</h1>
      <img src={props.image} alt={props.name} />
      <h3>Status: {props.status}</h3>
      <h3>Species: {props.species}</h3>
    </StyledDiv>
  );
};

export default CharacterCard;