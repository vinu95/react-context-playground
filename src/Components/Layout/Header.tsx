import { styled } from 'styled-components';
import { useTheme } from '../../Hooks/useTheme';

function Header() {
  const {toggleTheme} = useTheme();
  return (
    <HeaderWrapper>
      <HeaderLogo>React Context Playround</HeaderLogo>
      <EditButton onClick={toggleTheme}>Switch to Edit Mode</EditButton>
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

const EditButton = styled.button`
    width: 250px;
    height: 40px;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.button.background};
    color: ${({ theme }) => theme.colors.button.text};
`;

export default Header;
