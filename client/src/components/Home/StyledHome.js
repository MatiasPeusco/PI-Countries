import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SearcherContainer = styled.div`
  flex-grow: 2;
`;

export const H2Title = styled.h2`
  font-weight: 500;
  font-size: 2.25rem;
`;

export const List = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 50px 20px;
`;

export const Section = styled.section`
  max-width: 1200px;
  margin: 40px auto 80px;

  @media screen and (max-width: 1000px) {
    padding: 0 20px;
  }
`;

export const Searcher = styled.form`
  position: relative;
  display: flex;
  gap: 1rem;
`;

export const DeleteSearch = styled.span`
  position: absolute;
  left: 400px;
  top: 10px;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  padding: 10px 12px;
  border-radius: 0.5rem;
  border: 1px solid #373435;
  box-shadow: 0rem 0.0625rem 0.125rem 0rem rgba(16, 24, 40, 0.05);
  font-size: 1rem;
  width: 400px;
  margin: 0;

  @media screen and (max-width: 992px) {
    width: 300px;
  }

  @media screen and (max-width: 600px) {
    width: 250px;
  }
`;

export const SearchButton = styled.button`
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  background: #ff0;
  color: #000;
  border: 0.0625rem solid #ff0;
  gap: 0.5rem;
  border-radius: 0.75rem;
  font-weight: 600;
  width: fit-content;
  cursor: pointer;

  &:hover {
    background: #6e47db;
    color: #fff;
    border-color: #6e47db;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-grow: 1;

  @media screen and (max-width: 680px) {
    padding: 20px 0;
    justify-content: flex-start;
  }
`;

export const Button = styled.button`
  width: fit-content;
  height: 30px;
  padding: 0 12px;
  margin-right: 12px;
  border-radius: 10px;
  border-style: outset;
  background: #6e47db;
  color: #fff;
  font-size: 14px;
  transition: 0.2s ease;
  cursor: pointer;

  &:hover {
    border-style: inset;
  }
`;