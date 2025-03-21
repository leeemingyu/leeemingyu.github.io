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
  background-color: rgb(11, 6, 30);
  padding: 24px;
  position: fixed;
  width: calc(100% - 48px);
`;
const HeaderStart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
  border-radius: 5px;
  color: rgb(210, 210, 210);
  cursor:pointer;
  padding: 4px 6px 4px 6px;
  height: 30px;
  &:hover{
    background-color:rgb(37, 42, 50);
    color: #f0f6fc;
  }
`;
const HeaderEnd = styled.div`
  display: flex;
  color:rgb(210, 210, 210);
  width: 250px;
  justify-content: space-between;
`;
const HeaderEndItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
  border-radius: 5px;  
  cursor:pointer;
  padding: 4px 6px 4px 6px;
  &:hover{
    background-color:rgb(37, 42, 50);
    color: #f0f6fc;
  }
`;
export default Header;
