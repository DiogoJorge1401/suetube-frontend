import styled from 'styled-components'

export const Container = styled.div<{ sideBarIsOpen: boolean }>`
  min-height: calc(100vh - 3.5rem);
  padding-bottom: .25rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: .625rem;

  margin-bottom: ${({ sideBarIsOpen }) => sideBarIsOpen && '5rem'};
`
export const Wrapper = styled.div`
  padding: 1.25rem 3.125rem;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: .25rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`
export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: .625rem;
`
export const Title = styled.h1`
  font-size: 1.5rem;
`
export const Or = styled.h2`
  font-size: 1rem;
`
export const SubTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
`
export const Input = styled.input`
  padding: .625rem;
  width: 100%;

  border: 1px solid ${({ theme }) => theme.soft};
  outline: none;
  border-radius: .25rem;

  background-color: transparent;
  color: ${({ theme }) => theme.text};
`
export const Button = styled.button`
  font-weight: 500;
  cursor: pointer;
  padding: .625rem 1.25rem;

  border: none;
  border-radius: .25rem;

  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`
export const More = styled.div`
  font-size: .75rem;
  color: ${({ theme }) => theme.textSoft};

  display: flex;
  gap: 3.125rem;
`
export const Links = styled.div`
  display: flex;
  gap: 1.875rem;
`
export const Link = styled.span``
export const ErrorMessage = styled.p`
  color: rgb(234, 0, 0);
`
