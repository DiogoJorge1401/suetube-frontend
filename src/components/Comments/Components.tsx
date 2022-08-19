import styled from 'styled-components'

export const Container = styled.div`
`
export const NewComment = styled.div`
  display: flex;
  justify-content: center;
  gap: .625rem;
`
export const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`
export const Input = styled.input`
  width: 100%;

  border: none;
  outline: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};

  background-color: transparent;
  padding: .25rem;
  color: ${({ theme }) => theme.text};
`
export const InputArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: .625rem;
`

export const SubmitButtons = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: .625rem;
`
export const SubmitButton = styled.button`
  padding: .625rem 1.25rem;

  font-weight: 500;
  
  cursor: pointer;
  border: none;
  border-radius: .25rem;

  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`
export const Button = styled.button<{ type: any }>`
  padding: .625rem 1.5rem;

  font-weight: 600;
  
  cursor: pointer;
  border: none;
  border-radius: .25rem;

  background-color: ${({ theme, type }) => type === 'canceal' ? 'transparent' : theme.soft };
  color: ${({ theme}) => theme.textSoft};
`