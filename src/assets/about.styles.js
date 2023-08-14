import styled from "styled-components";

export const Container = styled.div`
  /* border: 1px solid green; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ProfileContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 150px;
  height: auto;
  @media screen and (max-width: 425px) {
    width: 100px;
  }
  @media screen and (max-width: 320px) {
    width: 80px;
  }
`;

export const ProfileInfo = styled.div`
  margin-left: 2rem;
  h4 {
    color: grey;
  }
  @media screen and (max-width: 425px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 320px) {
    font-size: 0.4rem;
  }
`;
