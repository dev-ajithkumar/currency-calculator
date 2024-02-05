import styled from "styled-components";
import { MdDownload } from "react-icons/md";

const FooterContainer = styled.footer`
  background-color: #f9f9f9;
  padding: 24px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: right;
`;

const DownloadLink = styled.a`
  text-decoration: none;
  color: #0f0f0f;
  margin-left: 10px;
  font-size: medium;
  text-align: center;
  padding-right: 25px;
`;

function Footer() {
  return (
    <FooterContainer>
      <h2>
        <DownloadLink
          href="https://czoxcidyufukacgougmo.supabase.co/storage/v1/object/sign/my-resume/AjithKumarB_ReactDev_Resume.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJteS1yZXN1bWUvQWppdGhLdW1hckJfUmVhY3REZXZfUmVzdW1lLnBkZiIsImlhdCI6MTcwNzEzMjQxNywiZXhwIjoxNzM4NjY4NDE3fQ.24c-vtyaeks1eoOLXJF9455370VvvGXFzH9X1vf4MUY&t=2024-02-05T11%3A26%3A53.822Z"
          download
          target="_blank"
        >
          Download My Resume <MdDownload style={{ marginBottom: "-4px" }} />
        </DownloadLink>
      </h2>
    </FooterContainer>
  );
}

export default Footer;
