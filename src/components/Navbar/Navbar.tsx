import { SearchOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../img/logo.png';
import { useAppSelector } from '../../redux/store';
import { SignInButton } from '../SignInButton/SignInButton';
import { Upload } from '../Upload/Upload';
import { UserInformation } from '../UserInformation/UserInformation';
import {
  Avatar,
  Container,
  Img,
  Input,
  Logo,
  LogoWrapper,
  MenuOutlinedButton,
  Search,
  SearchIcon,
  User,
  UserWrapper,
  VideoCall, Wrapper
} from './Components';


interface NavbarProps {
  setSideBarIsOpen: (value: boolean) => void
  sideBarIsOpen: boolean
}

export const Navbar = ({ setSideBarIsOpen, sideBarIsOpen }: NavbarProps) => {
  const { currentUser } = useAppSelector((state) => state.user)
  const navigate = useNavigate()

  const [openPopUp, setOpenPopUp] = useState(false)
  const [showUserInfos, setShowUserInfos] = useState(false)
  const [search, setSearch] = useState('')

  const handleClick = () => {
    setSideBarIsOpen(!sideBarIsOpen)
  }

  const showUserInformations = () => {
    setShowUserInfos(!showUserInfos)
  }

  const handleSearch = () => {
    if (!search) return navigate('/')
    navigate(`/videos/search/${search}`)
  }


  return (
    <>
      <Container>
        <Wrapper>
          <Logo>
            <MenuOutlinedButton onClick={handleClick} />

            <LogoWrapper to='/'>
              <Img src={logo} />SueTube
            </LogoWrapper>
          </Logo>

          <Search>
            <Input placeholder='Search' onChange={e => setSearch(e.target.value)} />
            <SearchIcon onClick={handleSearch} />
          </Search>

          {
            currentUser
              ?
              <User>
                <VideoCall
                  onClick={() => setOpenPopUp(s => !s)}
                />

                <UserWrapper onClick={showUserInformations}>
                  <Avatar src={currentUser.img} />

                  {currentUser.username}
                </UserWrapper>
              </User>
              : <SignInButton />
          }
        </Wrapper>

        {showUserInfos && <UserInformation setShowUserInfos={setShowUserInfos} />}
      </Container>

      {openPopUp && <Upload setOpenPopUp={setOpenPopUp} />}

    </>
  )
}
