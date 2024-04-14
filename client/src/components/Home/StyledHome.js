import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

export const SearcherContainer = styled.div`
  flex-grow: 2;
`;

export const H2Title = styled.h2`
  font-weight: 500;
  font-size: 2.25rem;
`;

export const Section = styled.section`
  max-width: 1000px;
  margin: 50px auto 100px;
`;

export const Searcher = styled.form`
  display: flex;
  gap: 1rem;
`;

export const SearchInput = styled.input`
  padding: 10px 12px;
  border-radius: 0.5rem;
  border: 1px solid #373435;
  box-shadow: 0rem 0.0625rem 0.125rem 0rem rgba(16, 24, 40, 0.05);
  font-size: 1rem;
  width: 22.5rem;
  margin: 0;
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