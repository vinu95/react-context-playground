import { useState } from "react";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

type wrapperProps = {
  isOpen: boolean;
};

function Layout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(true);

  const handleViewSidebar = () => {
    setIsSidebarCollapsed(prevState => !prevState);
  };

  return (
    <Wrapper isOpen={isSidebarCollapsed}>
      <Header />
      <Sidebar isOpen={isSidebarCollapsed} toggleSidebar={handleViewSidebar} />
      <MainSection>
        <Outlet />
      </MainSection>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div<wrapperProps>`
  display: grid;
  grid-template-areas:
    "header header"
    "aside main"
    "footer footer";
  grid-template-columns: minmax(250px, 1fr) 4fr;
  grid-template-rows: 5rem auto 4rem;
  min-height: 100vh;
  ${({ isOpen }) => isOpen && `grid-template-columns: 100px 1fr`};
`;

const MainSection = styled.main`
  grid-area: main;
  background: ${({ theme }) => theme.colors.variant_4};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Layout;
