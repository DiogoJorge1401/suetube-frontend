import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { Menu } from "./components/Menu/Menu";
import { Navbar } from "./components/Navbar/Navbar";
import { GlobalStyle } from "./global.styles";
import { Home } from "./pages/Home/Home";
import { Search } from "./pages/Search/Search";
import { SignIn } from "./pages/SignIn/SignIn";
import { Video } from "./pages/Video/Video";
import { DarkTheme, LightTheme } from "./utils/Theme";

const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 4.5;
  padding: 3.5rem 0 0;

  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};

  @media screen and (max-width: 1024px) {
    flex: 3.5;
  }
  @media screen and (max-width: 768px) {
    flex: 2.5;
  }
  @media screen and (max-width: 480px) {
    flex: 1.5;
  }
  @media screen and (max-width: 320px) {
    flex: 0.5;
  }
`;

export const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [sideBarIsOpen, setSideBarIsOpen] = useState(true);
  const isMobile = window.innerWidth <= 480;

  useEffect(() => {
    if (isMobile) setSideBarIsOpen(false);
  }, []);

  const handleClick = (screen: string) => {
    if (screen === "home" || screen === "signin" || screen === "search") {
      if (sideBarIsOpen && isMobile) setSideBarIsOpen(false);
      return;
    }
    if (sideBarIsOpen) setSideBarIsOpen(false);
  };

  return (
    <ThemeProvider theme={darkMode ? DarkTheme : LightTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Container>
          <Navbar
            setSideBarIsOpen={setSideBarIsOpen}
            sideBarIsOpen={sideBarIsOpen}
          />

          <Menu
            setDarkMode={setDarkMode}
            darkMode={darkMode}
            sideBarIsOpen={sideBarIsOpen}
          />

          <Main>
            <Routes>
              <Route path="/">
                <Route
                  index
                  element={<Home type="random" handleClick={handleClick} />}
                />

                <Route
                  path="trends"
                  element={<Home type="trend" handleClick={handleClick} />}
                />

                <Route
                  path="subscriptions"
                  element={<Home type="subs" handleClick={handleClick} />}
                />

                <Route
                  path="signin"
                  element={
                    <SignIn
                      sideBarIsOpen={sideBarIsOpen}
                      handleClick={handleClick}
                    />
                  }
                />

                <Route path="video">
                  <Route
                    path=":id"
                    element={
                      <Video
                        setSideBarIsOpen={setSideBarIsOpen}
                        handleClick={handleClick}
                      />
                    }
                  />
                </Route>
                <Route path="videos">
                  <Route
                    path="search/:title"
                    element={<Search handleClick={handleClick} />}
                  />
                </Route>
              </Route>
            </Routes>
          </Main>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
};
