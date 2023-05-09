import { styled } from 'styled-components';

function Footer() {
  return (
    <FooterWrapper>
      <span>
        Copyright &copy; 2023-2024 React Context Playground.
      </span>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  grid-area: footer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Footer;
