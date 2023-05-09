
import { PropsWithChildren } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPeopleGroup,
  faChartSimple,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

export interface Props {
  isOpen: boolean,
  toggleSidebar: () => void,
}

function Sidebar(props: PropsWithChildren<Props>) {
  const {isOpen, toggleSidebar} = props;
  
  return (
    <SidebarWrapper>
      <SidebarNavWrapper>
        <Link to="dashboard">
          <SidebarListItems>
            <FontAwesomeIcon icon={faHouse} />
            Dashboards
          </SidebarListItems>
        </Link>
        <Link to="teams">
          {" "}
          <SidebarListItems>
            <FontAwesomeIcon icon={faPeopleGroup} />
            Teams
          </SidebarListItems>
        </Link>
        <Link to="projects">
          <SidebarListItems>
            <FontAwesomeIcon icon={faChartSimple} />
            Projects
          </SidebarListItems>
        </Link>
        <Link to="addMember">
          <SidebarListItems>
            <FontAwesomeIcon icon={faUserPlus} />
            Add Members
          </SidebarListItems>
        </Link>
      </SidebarNavWrapper>
      <ToggleButton>Click</ToggleButton>
    </SidebarWrapper>
  );
}

const SidebarWrapper = styled.aside`
  grid-area: aside;
  position: relative;
  background: ${({ theme }) => theme.colors.primary_variant_3};
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

const SidebarListItems = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 0.2rem;
  padding: 1rem 0.5rem;
  color: #666666;
  font-size: 1.4rem;
  font-weight: 600;
  svg {
    width: 32px;
    height: 32px;
  }
  &:hover {
    background: ${({ theme }) => theme.colors.primary_variant_4};
    color: #000000;
  }
`;

const ToggleButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: -25px;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  padding: unset;
`;

export default Sidebar;
