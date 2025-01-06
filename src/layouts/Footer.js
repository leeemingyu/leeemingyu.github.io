import styled from "styled-components";

function Footer() {
  return (
    <FooterWrapper>
      &copy; 2025 leeemingyu. All rights reserved.
    </FooterWrapper>
  );
}
const FooterWrapper = styled.div`
  background-color:rgb(11, 6, 30);
  color:rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  height: 64px;
`;

export default Footer;
