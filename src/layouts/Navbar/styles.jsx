import styled from "styled-components";

export const Navbar = styled.div`
  background-color: #000000;
  width: 100%;
  height: 10vh;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 8rem;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 2rem;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: #ff8000;
  }
`;

export const Menu = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
`;

export const MenuItem = styled.a`
  margin: 0 1rem;
  cursor: pointer;
  color: #ffffff;
  text-decoration: none;
  &:hover {
    color: #ff8000;
  }
`;
