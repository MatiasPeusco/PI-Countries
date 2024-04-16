import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  padding: 0 30px;
  margin-bottom: 30px;
  box-sizing: border-box;
  background: #fff;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.07);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${({ navScroll }) =>
        navScroll ? "0 10px 20px 0 rgba(0,0,0,.07)" : "null"};
  position: sticky;
  top: 0;
  z-index: 2;
  transition: 0.2s ease;
`;

export const Logo = styled.div`
  font-size: 30px;
  font-weight: 800;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  flex-flow: row nowrap;
`;

export const ListItem = styled.li`
  margin-right: 8px;
  padding: 10px;

  a {
    text-decoration: none;
    color: #000;
    transition: color 0.3s ease;

    &:hover {
      color: #6e47db;
    }
  }
`;