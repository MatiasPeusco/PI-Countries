import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 8px;
  min-width: 150px;
  z-index: 1;
`;

export const DropdownItem = styled.div`
  cursor: pointer;
  padding: 6px 12px;
  &:hover {
    background-color: #f2f2f2;
  }
`;