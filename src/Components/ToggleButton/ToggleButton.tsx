import { styled } from "styled-components";
import { useTheme } from "../../Contexts/ThemeContext";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ToggleButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <ToggleButtonWrapper
      onClick={toggleTheme}
      title={`Switch between dark and light mode (currently on ${theme.name?.toLowerCase()} mode)`}
    >
      {theme.name === "Dark" ? (
        <FontAwesomeIcon icon={faMoon} flip="horizontal" />
      ) : (
        <FontAwesomeIcon icon={faSun} />
      )}
    </ToggleButtonWrapper>
  );
}

const ToggleButtonWrapper = styled.button`
  background: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 0;
  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.variant_3};
  }
  svg {
    width: 30px;
    height: 30px;
    transform: translate(0px, 1px);
    rotate: -30deg;
  }
  ${({ theme }) =>
    theme.name === "Light" &&
    `
        background: ${theme.colors.variant_3}
        &:hover {
            background: ${theme.colors.variant_3};
        }
        svg {
            color: #0A2647;
        }
    `};
`;

export default ToggleButton;
