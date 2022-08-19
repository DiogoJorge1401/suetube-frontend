import { AccountCircleOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Button } from './Components';

export const SignInButton = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/signin')
  }

  return (
    <Button onClick={handleClick}>
      <AccountCircleOutlined />  SIGN IN
    </Button>
  )
}
