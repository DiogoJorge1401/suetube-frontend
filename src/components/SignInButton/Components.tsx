import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: .25rem;

  padding: .25rem .5rem;
  width:max-content;

  background-color: transparent;
  color: #3ea6ff;
  font-weight: 500;
  
  border: 1px solid #3ea6ff;
  border-radius: .25rem;
  outline:none;

  cursor: pointer;
  transition: .3s;

  &:hover{
    background-color: #3ea6ff;
    color: ${({ theme }) => theme.bg};
  }
`