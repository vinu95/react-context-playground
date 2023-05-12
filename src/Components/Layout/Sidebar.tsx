import { PropsWithChildren } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPeopleGroup,
  faChartSimple,
  faUserPlus,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
export interface Props {
  isOpen: boolean;
  toggleSidebar: () => void;
}

type ListItemType = Omit<Props, "toggleSidebar">;

function Sidebar(props: PropsWithChildren<Props>) {
  const { isOpen, toggleSidebar } = props;

  const SidebarText = (content: string) => {
    if (isOpen) return;
    return content;
  };

  return (
    <SidebarWrapper>
      <SidebarNavWrapper>
        <Link to="dashboard">
          <SidebarListItems isOpen={isOpen}>
            <FontAwesomeIcon icon={faHouse} />
            {SidebarText("Dashboards")}
          </SidebarListItems>
        </Link>
        <Link to="teams">
          {" "}
          <SidebarListItems isOpen={isOpen}>
            <FontAwesomeIcon icon={faPeopleGroup} />
            {SidebarText("Teams")}
          </SidebarListItems>
        </Link>
        <Link to="projects">
          <SidebarListItems isOpen={isOpen}>
            <FontAwesomeIcon icon={faChartSimple} />
            {SidebarText("Projects")}
          </SidebarListItems>
        </Link>
        <Link to="addMember">
          <SidebarListItems isOpen={isOpen}>
            <FontAwesomeIcon icon={faUserPlus} />
            {SidebarText("Add Members")}
          </SidebarListItems>
        </Link>
      </SidebarNavWrapper>
      <ToggleButton onClick={toggleSidebar}>
        {isOpen ? (
          <FontAwesomeIcon icon={faChevronRight} />
        ) : (
          <FontAwesomeIcon icon={faChevronLeft} />
        )}
      </ToggleButton>
    </SidebarWrapper>
  );
}

const SidebarWrapper = styled.aside`
  grid-area: aside;
  position: relative;
  background: ${({ theme }) => theme.colors.variant_3};
`;

const SidebarNavWrapper = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem;
  a {
    text-decoration: none;
  }
`;

const SidebarListItems = styled.li<ListItemType>`
  display: flex;
  ${({ isOpen }) => isOpen && `justify-content: center;`};
  align-items: center;
  gap: 1rem;
  border-radius: 0.2rem;
  padding: 1rem 0.5rem;
  color: ${({ theme }) => theme.colors.sidebar.text};
  font-size: 1.4rem;
  font-weight: 600;
  svg {
    width: 32px;
    height: 32px;
  }
  &:hover {
    background: ${({ theme }) => theme.colors.variant_4};
    color: ${({ theme }) => theme.colors.sidebar.highlight_color};
  }
`;

const ToggleButton = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  padding: unset;
`;

export default Sidebar;
