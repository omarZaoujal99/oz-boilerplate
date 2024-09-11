import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    // font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    // font-size: ${({ theme }) => theme.typography.fontSize.medium};
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;

export default GlobalStyle;
