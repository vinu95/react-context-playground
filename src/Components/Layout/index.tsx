import { useState } from "react";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import { DashboardProvider } from "../../Contexts/DashboardContext";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

type wrapperProps = {
  isopen: string;
};

function Layout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(true);

  const handleViewSidebar = () => {
    setIsSidebarCollapsed((prevState) => !prevState);
  };

  return (
    <Wrapper isopen={String(isSidebarCollapsed)}>
      <DashboardProvider>
        <Header />
        <Sidebar
          isOpen={isSidebarCollapsed}
          toggleSidebar={handleViewSidebar}
        />
        <MainSection>
          <Outlet />
        </MainSection>
      </DashboardProvider>
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
  ${({ isopen }) => isopen === "true" && `grid-template-columns: 100px 1fr`};
`;

const MainSection = styled.main`
  grid-area: main;
  background: ${({ theme }) => theme.colors.variant_4};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 0rem;
`;

export default Layout;
