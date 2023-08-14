import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem 14rem 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    padding: 2rem 8rem 2rem;
  }
  @media screen and (max-width: 425px) {
    padding: 2rem 3rem 2rem;
  }
  @media screen and (max-width: 320px) {
    padding: 2rem 2rem 2rem;
  }
`;

export const BlogTitle = styled.h1`
  font-size: 3rem;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 425px) {
    font-size: 1.5rem;
  }
`;

export const BlogImg = styled.img`
  margin: 1rem 0;
  width: 700px;
  @media screen and (max-width: 1024px) {
    width: 500px;
  }
  @media screen and (max-width: 768px) {
    width: 300px;
  }
  @media screen and (max-width: 375px) {
    width: 250px;
  }
`;

export const BlogContent = styled.p`
  text-indent: 4rem;
  font-stretch: expanded;
  font-size: 1.5rem;
  margin-top: 2rem;

  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 375px) {
    font-size: 0.8rem;
  }
`;

export const AuthorContainer = styled.div`
  margin-top: 2rem;

  width: 100%;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  div {
    margin-left: 1rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 375px) {
    font-size: 0.7rem;
  }
`;

export const AuthorImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
  @media screen and (max-width: 375px) {
    width: 30px;
    height: 30px;
  }
`;
