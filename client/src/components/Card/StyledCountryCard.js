import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Card = styled.article`
  width: 250px;
  background: #fff;
  border: 0.0625rem solid #eaecf0;
  border-radius: 1.5rem;
`;

export const ImageContainer = styled.div`
  width: 250px;
  position: relative;
  
  & > img {
    object-fit: cover;
    position: relative;
    border-top-right-radius: 1.26rem;
    border-top-left-radius: 1.26rem;
  }
`;

export const TextContainer = styled.div`
  padding: 10px 20px;
`;

export const Text = styled.span`
  color: #6e47db;
  font-size: 0.875rem;
  font-weight: 500;
`;

export const Title = styled.h4`
  color: #000;
  font-size: 1.2rem;
  font-weight: 700;
  margin: 10px 0;
`;