import styled from "styled-components";

function Header() {
  return (
    <HeaderWrapper>
      <HeaderStart>leeemingyu</HeaderStart>
      <HeaderEnd>
        <HeaderEndItem>About</HeaderEndItem>
        <HeaderEndItem>Skills</HeaderEndItem>
        <HeaderEndItem>Projects</HeaderEndItem>
        <HeaderEndItem>Contact</HeaderEndItem>
      </HeaderEnd>
    </HeaderWrapper>
  );
}
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #010409;
  padding: 24px;
`;
const HeaderStart = styled.div`
  color: #f0f6fc;
`;
const HeaderEnd = styled.div`
  display: flex;
  color: #f0f6fc;
  width: 250px;
  justify-content: space-between;
`;
const HeaderEndItem = styled.div`
  
`;
export default Header;
