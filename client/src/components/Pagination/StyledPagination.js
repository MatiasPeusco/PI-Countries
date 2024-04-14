import styled from "styled-components";

export const PaginationContainer = styled.ul`
  gap: 5px;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin-top: 60px;
  display: flex;
  justify-content: center;
`;

export const PaginationItem = styled.li`
  margin: 0 2px;
`;

export const PaginationButton = styled.button`
  padding: 5px 10px;
  border: 1px solid #6e47db;
  border-style: outset;
  border-radius: 6px;
  background: #fff;
  color: #373435;
  text-decoration: none;
  cursor: pointer;

  &.active {
    background-color: #6e47db;
    color: #fff;
    border-color: #007bff;
  }

  &:hover {
    background-color: #ff0;
    color: #000;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
  
  @media screen and (max-width: 768px) {
    padding: 3px 8px;
  }
`;