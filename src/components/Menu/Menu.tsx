import {
  ArticleOutlined,
  ExploreOutlined,
  FlagOutlined,
  HelpOutlineOutlined,
  HistoryOutlined,
  Home,
  LibraryMusicOutlined,
  LiveTvOutlined,
  MovieOutlined,
  SettingsBrightnessOutlined,
  SettingsOutlined,
  SportsBasketballOutlined,
  SportsEsportsOutlined,
  SubscriptionsOutlined,
  VideoLibraryOutlined
} from '@mui/icons-material';
import { Container, Hr, Item, Login, Title, Wrapper } from './Components';
import { SignInButton } from '../SignInButton/SignInButton';
import { useAppSelector } from '../../redux/store';
import { useLocation } from 'react-router-dom';

interface MenuProps {
  setDarkMode: (value: boolean) => void
  darkMode: boolean
}

export const Menu = ({ setDarkMode, darkMode }: MenuProps) => {
  const { currentUser } = useAppSelector((state) => state.user)
  const {pathname} = useLocation()

  return (
    <Container>
      <Wrapper>

        <Item to='/'>
          <Home /> Home
        </Item>

        <Item to='/trends'>
          <ExploreOutlined /> Explore
        </Item>

        <Item to={!currentUser ? '/signin' : '/subscriptions'}>
          <SubscriptionsOutlined /> Subscriptions
        </Item>

        <Hr />

        {currentUser ? (<></>) : (
          <>
            <Login>
              Sign in to like videos, comment, and subscribe.
              <SignInButton />
            </Login>

            <Hr />
          </>
        )}

        <Title>
          BEST OF SUETUBE
        </Title>

        <Item to=''>
          <VideoLibraryOutlined /> Library
        </Item>

        <Item to=''>
          <HistoryOutlined /> History
        </Item>

        <Hr />

        <Item to=''>
          <LibraryMusicOutlined /> Music
        </Item>

        <Item to=''>
          <SportsBasketballOutlined /> Sports
        </Item>

        <Item to=''>
          <SportsEsportsOutlined /> Gaming
        </Item>

        <Item to=''>
          <MovieOutlined /> Movies
        </Item>

        <Item to=''>
          <ArticleOutlined /> News
        </Item>

        <Item to=''>
          <LiveTvOutlined /> Live
        </Item>

        <Hr />

        <Item to=''>
          <SettingsOutlined /> Settings
        </Item>

        <Item to=''>
          <FlagOutlined /> Report
        </Item>

        <Item to=''>
          <HelpOutlineOutlined /> Help
        </Item>

        <Item to={pathname} onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlined /> {darkMode ? 'Light' : 'Dark'} Mode
        </Item>

      </Wrapper>
    </Container>
  )
}
