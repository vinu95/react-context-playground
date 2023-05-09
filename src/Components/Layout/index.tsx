import { useState } from "react";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function Layout() {
  const [sidebarOpen, setSideBarOpen] = useState<boolean>(false);

  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };

  return (
    <Wrapper>
      <Header />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar}/>
      <MainSection>
        <Outlet />
      </MainSection>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "aside main"
    "footer footer";
  grid-template-columns: 350px 3fr;
  grid-template-rows: 5rem auto 4rem;
  min-height: 100vh;
`;

const MainSection = styled.main`
  grid-area: main;
  background: ${({ theme }) => theme.colors.primary_variant_4};
`;

export default Layout;
