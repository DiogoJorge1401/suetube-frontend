import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;

  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  background-color: rgba(0,0,0,.25);
  z-index: 999;
  
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Wrapper = styled.div`
  width: 37.5rem;
  height: 37.5rem;
  padding: 1.25rem;

  background-color: ${({ theme }) => theme.bgLighter};
  border-radius: .25rem;
  color: ${({ theme }) => theme.text};

  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  position: relative;
`
export const Close = styled.button`
  position: absolute;
  top: .625rem;
  right: .625rem;
  
  color: inherit;
  background-color: transparent;

  cursor: pointer;
  border: none;
  outline: none;
`
export const Title = styled.h1`
  text-align: center;
`
export const Input = styled.input`
  padding: .625rem;

  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: .25rem;

  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
`
export const TextArea = styled.textarea`
  resize: none;

  padding: .625rem;

  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: .25rem;

  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
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
export const Label = styled.label`
  font-size: .875rem;
`

export const FileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`