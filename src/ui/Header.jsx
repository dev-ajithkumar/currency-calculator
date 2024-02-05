import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const HeaderContainer = styled.div`
  font-size: 24px;
  font-weight: bold;
  padding: 20px;
  background-color: #f9f9f9;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Heading = styled.h2``;

const AboutMeSpan = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  text-decoration: none;
`;

function Header() {
  return (
    <HeaderContainer>
      <Heading>Currency Calculator</Heading>
      <AboutMeSpan
        href="https://github.com/dev-ajithkumar"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />{" "}
        <span style={{ fontSize: "18px" }}>dev.ajithkumar.b@gmail.com</span>
      </AboutMeSpan>
    </HeaderContainer>
  );
}

export default Header;
