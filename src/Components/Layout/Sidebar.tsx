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

type ListItemType = {
  isopen: string;
}

function Sidebar(props: PropsWithChildren<Props>) {
  const { isOpen, toggleSidebar } = props;

  const SidebarText = (content: string) => {
    if (isOpen) return;
    return content;
  };

  return (
    <SidebarWrapper>
      <SidebarNavWrapper>
        <SidebarListItems isopen={String(isOpen)}>
          <Link to="dashboard" aria-label="Dashboard">
            <FontAwesomeIcon icon={faHouse} />
            {SidebarText("Dashboards")}
          </Link>
        </SidebarListItems>
        <SidebarListItems isopen={String(isOpen)}>
          <Link to="teams" aria-label="Teams">
            <FontAwesomeIcon icon={faPeopleGroup} />
            {SidebarText("Teams")}
          </Link>
        </SidebarListItems>
        <SidebarListItems isopen={String(isOpen)}>
          <Link to="projects" aria-label="Projects">
            <FontAwesomeIcon icon={faChartSimple} />
            {SidebarText("Statistics")}
          </Link>
        </SidebarListItems>
        <SidebarListItems isopen={String(isOpen)}>
          <Link to="addMember" aria-label="Add Member">
            <FontAwesomeIcon icon={faUserPlus} />
            {SidebarText("Add Members")}
          </Link>
        </SidebarListItems>
      </SidebarNavWrapper>
      <ToggleButton onClick={toggleSidebar} aria-label="Sidebar Toggle">
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
  list-style: none;
  a {
    display: flex;
    ${({ isopen }) => isopen === "true" && `justify-content: center;`};
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
  font-size: 1.5rem;
  background: ${({ theme }) => theme.colors.variant_2};
`;

export default Sidebar;
