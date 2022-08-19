import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  height: auto;

  overflow: hidden;
  overflow-y: auto;
  
  position: fixed;
  right: 0;
  
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
  padding: .5rem;

  display: flex;
  flex-direction: column;
  gap: .25rem;
`
export const Item = styled(Link)`
  padding: .5rem;

  color: inherit;
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
