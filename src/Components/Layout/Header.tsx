import { styled } from "styled-components";
import ToggleButton from "../ToggleButton/ToggleButton";
import { useDashboard } from "../../Contexts/DashboardContext";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

type PathType = `/${string}`;

type ButtonProps = {
  isdashboard: string;
};

function Header() {
  const {
    state: { isEditable },
    dispatch,
  } = useDashboard();
  const { pathname } = useLocation();
  const DashboardPath: PathType = "/dashboard";
  const isDashboard = pathname === DashboardPath;

  const handleEditToggle = () => {
    if (isDashboard) dispatch({ type: "SET_EDIT_TOGGLE" });
  };

  useEffect(() => {
    if (pathname !== "/dashboard") {
      dispatch({ type: "SET_EDIT_TOGGLE", payload: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <HeaderWrapper>
      <HeaderLogo>React Context Playround</HeaderLogo>
      <LeftHeaderSection>
        <EditButton
          isdashboard={String(isDashboard)}
          onClick={handleEditToggle}
          title={`Switch between read and edit mode in dashboard screen (currently on ${
            isEditable ? "edit" : "read"
          } mode)`}
        >{`Switch to ${isEditable ? "Read" : "Edit"} Mode`}</EditButton>
        <ToggleButton />
      </LeftHeaderSection>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
`;

const HeaderLogo = styled.span`
  font-size: 1.5rem;
  padding: 1rem;
`;

const EditButton = styled.button<ButtonProps>`
  width: 250px;
  height: 40px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.button.background};
  color: ${({ theme }) => theme.colors.button.text};
  pointer-events: ${({ isdashboard }) => isdashboard === "true" ? "unset" : "none"};
  cursor: default;

  &:hover {
    background: ${({ theme }) => theme.colors.variant_4};
    color: ${({ theme }) => theme.colors.sidebar.highlight_color};
  }
`;

const LeftHeaderSection = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
`;

export default Header;
