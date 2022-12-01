import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    font-family: 'Roboto', sans-serif;
  }

  html{
    @media screen and (max-width: 1024px) { 
      font-size: 95%;
    }
    @media screen and (max-width: 768px) { 
      font-size: 90%;
    }
    @media screen and (max-width: 480px) { 
      font-size: 85%;
    }
    @media screen and (max-width: 320px) { 
      font-size: 80%;
    }
  }

  body{
    &::-webkit-scrollbar{
      background-color: ${({ theme }: { theme: any }) => theme.bg};
      width: 1rem;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: .5rem;
      border: .25rem solid transparent;
      background-clip: content-box;
      background-color: #717171;
    }
  }

  img {
    max-width: 100%;
    object-fit: cover;
  }
`;
