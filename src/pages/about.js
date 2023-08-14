import * as React from "react";
import Layout from "../layouts";
import "../assets/index.css";
import milImage from "../assets/mil.jpg";
import monImage from "../assets/mon.png";
import {
  Container,
  ProfileContainer,
  ProfileImg,
  ProfileInfo,
} from "../assets/about.styles.js";
const AboutPage = () => {
  return (
    <>
      <Layout>
        <h2 style={{ textAlign: "center", margin: "3rem 0" }}>Our Team</h2>
        <Container>
          <ProfileContainer>
            <ProfileImg src={milImage} alt="Mil" />
            <ProfileInfo>
              <h2>Chakrit Jirarattanakorn</h2>
              <h4>Computer Engineering</h4>
              <p>chakrit.jira@gmail.com</p>
            </ProfileInfo>
          </ProfileContainer>
          <ProfileContainer>
            <ProfileImg src={monImage} alt="Mon" />
            <ProfileInfo>
              <h2>Kiatisak Somkhunnguen</h2>
              <h4>Computer Engineering</h4>
              <p>penguindev.me@gmail.com</p>
            </ProfileInfo>
          </ProfileContainer>
        </Container>
      </Layout>
    </>
  );
};

export default AboutPage;

export const Head = () => <title>About</title>;
