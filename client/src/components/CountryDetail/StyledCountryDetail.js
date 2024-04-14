import styled from "styled-components";

export const StyledLine = styled.div`
  background-color: #ebebeb;
  height: 1px;
  width: 93%;
  margin: 60px auto;
  
  @media (min-width: 890px) {
    width: 56%;
  }
`;

export const Section = styled.section`
  max-width: 1000px;
  width: 100%;
  height: 100%;
  display: flex;
  margin: 40px auto;
  padding: 0 20px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const ID = styled.span`
  font-size: 1.25rem;
  padding: 3px 1rem;
  margin-bottom: 2rem;
  color: #6e47db;
  background: #d9d6fe;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
`;

export const Name = styled.h2`
  font-size: 40px;
  margin: 0;
`;

export const DetailsWrapper = styled.div`
  width: 80%;
  margin-top: 30px;
  padding: 20px;
  border: 0.0625rem solid #eaecf0;
  border-radius: 1.5rem;
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Item = styled.p`
  margin: 0 10px 0;
  font-size: 20px;
  font-weight: 600;
`;

export const DetailItem = styled.p`
  margin: 0;
`;

export const ImageContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  object-fit: contain;
`;