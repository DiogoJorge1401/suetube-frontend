import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { Menu } from './components/Menu/Menu'
import { Navbar } from './components/Navbar/Navbar'
import { GlobalStyle } from './global.styles'
import { Home } from './pages/Home/Home'
import { Search } from './pages/Search/Search'
import { SignIn } from './pages/SignIn/SignIn'
import { Video } from './pages/Video/Video'
import { DarkTheme, LightTheme } from './utils/Theme'

const Container = styled.div`
   display: flex;
`
const Main = styled.div`
  flex: 4.5;
  padding: 3.5rem 0 0;

  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  
  @media screen and (max-width: 1024px) { flex: 3.5 }
  @media screen and (max-width: 768px) { flex: 2.5 }
  @media screen and (max-width: 480px) { flex: 1.5 }
  @media screen and (max-width: 320px) { flex: .5 }
 
`

export const App = () => {
  const [darkMode, setDarkMode] = useState(true)
  const [sideBarIsOpen, setSideBarIsOpen] = useState(true)

  return (
    <ThemeProvider theme={darkMode ? DarkTheme : LightTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Container>
          <Navbar setSideBarIsOpen={setSideBarIsOpen} sideBarIsOpen={sideBarIsOpen} />

          {sideBarIsOpen && <Menu setDarkMode={setDarkMode} darkMode={darkMode} />}

          <Main>
            <Routes>
              <Route path='/'>
                <Route index element={<Home type='random' />} />

                <Route path='trends' element={<Home type='trend' />} />

                <Route path='subscriptions' element={<Home type='subs' />} />

                <Route path='signin' element={<SignIn sideBarIsOpen={sideBarIsOpen} />} />

                <Route path='video'>
                  <Route path=':id' element={<Video setSideBarIsOpen={setSideBarIsOpen} />} />

                </Route>
                <Route path='videos'>
                  <Route path='search/:title' element={<Search />} />
                </Route>

              </Route>
            </Routes>
          </Main>
        </Container>
      </BrowserRouter>
    </ThemeProvider>

  )
}