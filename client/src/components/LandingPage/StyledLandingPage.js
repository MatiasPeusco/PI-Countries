import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const TextContainer = styled.div`
  width: 500px;
  height: 300px;
  border: 2px solid #6e47db;
  border-style: inset;
  border-radius: 16px;
  background: #373435; /* grey */
  position: absolute;
  z-index: 4;
  bottom: 30%;
  left: 35%;
  padding: 20px 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: #ff0; /* henry-yellow */
  font-size: 25px;
  margin: 0;
  margin-bottom: 20px;
  text-align: center;
`;

export const Paragraph = styled.p`
  color: #fff;
  font-size: 15px;
`;

export const Button = styled.button`
  background: #6e47db;
  border: 1px solid #ff0;
  border-style: double;
  border-radius: 20px;
  color: #ff0;
  font-size: 18px;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.07);
  cursor: pointer;
  padding: 5px 8px;
  margin-top: 10px;
`;