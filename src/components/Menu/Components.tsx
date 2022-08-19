import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  height: 100vh;

  overflow: hidden;
  overflow-y: auto;
  
  position: sticky;
  transform: translateY(3.5rem);
  top: 0;
  
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  font-size: .875rem;

  &::-webkit-scrollbar-button {
    height: 1rem;
  }

  &::-webkit-scrollbar{
    background-color: transparent;
    width: 1rem;
  }

  &::-webkit-scrollbar-thumb {
    height: 3.5rem;
    border-radius: .5rem;
    border: .25rem solid transparent;
    background-clip: content-box;
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: #717171
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: .25rem;
  padding: 1rem 1.375rem 1.125rem;
  margin-bottom: 3.5rem;
`
export const Item = styled(Link)`
  color: inherit;
  padding: .5rem .25rem;
  text-decoration: none;

  display: flex;
  align-items: center;
  gap: 1.25rem;

  cursor: pointer;
  transition: .2s;

  &:hover{
    background-color: ${({ theme }) => theme.soft};
  }
`
export const Hr = styled.hr`
  margin: .5rem 0;
  border: .5px solid ${({ theme }) => theme.soft};
`
export const Login = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`

export const Title = styled.h2`
  font-size: 0.875rem;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: .5rem;
`