import { MenuOutlined, SearchOutlined, VideoCallOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 999;

  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};

  padding: 0 1.625rem;
  height: 3.5rem;

  @media screen and (max-width: 480px){
    padding: 0 1rem
  }
`
export const Wrapper = styled.div`
  position:relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100%;
`
export const Search = styled.div`
  width: 45%;
  margin: 0 auto;
  padding: .25rem .5rem;

  display: flex;
  justify-content: space-between;
  
  border: 1px solid #ccc;
  border-radius: .5rem;
`
export const Input = styled.input`
  border: none;
  outline: none;

  background-color: transparent;
  color: ${({ theme }) => theme.text};

  width: 100%;
  padding: .125rem .25rem;
  font-size: 1rem;
`
export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  font-weight: 700;
  background-color: ${({ theme }) => theme.bgLighter};
`
export const LogoWrapper = styled(Link)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;

  display: flex;
  align-items: center;
  gap: .25rem;
`
export const MenuOutlinedButton = styled(MenuOutlined)`
  cursor: pointer;
`
export const Img = styled.img`
  height: 1.5rem;
`
export const User = styled.div`
  display: flex;
  align-items: center;
  gap: .75rem;
  font-weight: 500;
`
export const VideoCall = styled(VideoCallOutlined)`
  cursor: pointer;
`
export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: .75rem;
  cursor: pointer;
`
export const Avatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #999;
`
export const SearchIcon = styled(SearchOutlined)`
  cursor: pointer;
`