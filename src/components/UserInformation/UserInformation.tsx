import { LogoutOutlined } from '@mui/icons-material'
import { useAppDispatch } from '../../redux/store'
import { logout } from '../../redux/userSlice'
import { Container, Item, Wrapper } from './Components'

interface UserInformationProps{
  setShowUserInfos(b:boolean):void
}

export const UserInformation = ({ setShowUserInfos }:UserInformationProps) => {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(logout())
    setShowUserInfos(false)
  }


  return (
    <Container>
      <Wrapper>

        <Item to='/' onClick={handleClick}>
          <LogoutOutlined /> Logout
        </Item>
      </Wrapper>
    </Container>
  )
}
