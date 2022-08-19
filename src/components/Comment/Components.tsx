import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  margin: 2.25rem 0;
`
export const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: .625rem;
`
export const Name = styled.span`
  font-size: 0.8125rem;
  font-weight: 500;
`
export const Date = styled.span`
  font-size: 0.75rem;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: .25rem;
`
export const Text = styled.span`
  font-size: 0.875rem;
`