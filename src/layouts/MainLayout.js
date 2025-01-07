import styled from "styled-components";

function MainLayout() {
  return (
    <MainLayoutWrapper>
      <MainItem>
        <MainItemTitle>About</MainItemTitle>
        <MainItemContent>
          안녕하세요. <br />
          프론트엔드 개발자 이민규입니다.
        </MainItemContent>
      </MainItem>
      <MainItem>
        <MainItemTitle>Skills</MainItemTitle>
        <MainItemContent>
          JS, TS, React, TailWindCss, Styled-Components, Figma, Zustand
        </MainItemContent>
      </MainItem>
      <MainItem>
        <MainItemTitle>Projects</MainItemTitle>
        <MainItemContent>
          폐기물 처리 서비스, GDSC KMOU 채팅 서비스
        </MainItemContent>
      </MainItem>
      <MainItem>
        <MainItemTitle>Contact</MainItemTitle>
        <MainItemContent>
          skystar9927@naver.com
        </MainItemContent>
      </MainItem>
    </MainLayoutWrapper>
  );
}

const MainLayoutWrapper = styled.div`
  padding-top: 86px;
`;
const MainItem = styled.div`
  background-color:rgb(11, 6, 30);
  color:rgb(255, 255, 255);
  display: flex;  
  flex-direction: column;
  align-items: center;
  height: 200px;
`;
const MainItemTitle = styled.div`
  font-size: 40px;
  margin-bottom: 24px;
  font-weight: bold;
  padding: 6px 12px 6px 12px;
  border-radius: 5px;
  cursor:pointer;
  &:hover{
    background-color:rgb(37, 42, 50);
    color: #f0f6fc;
  }
`;
const MainItemContent = styled.div`
`;

export default MainLayout;
