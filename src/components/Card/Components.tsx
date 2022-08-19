import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled(Link)`
  display: ${({ type }) => type === 'sm' && 'flex'};
  gap: .625rem;

  width: ${({ type }) => type === 'sm' ? "100%" : "calc(100%/4 - 1rem - 0.01px)"};
  height: max-content;
  margin: ${({ type }) => type === 'sm' ? '0 0 .625rem' : '0 0 2.875rem'};
  
  cursor: pointer;
  text-decoration: none;
  
  @media screen and (max-width: 1024px) {
    width: ${({ type }) => type === 'sm' ? "22.5rem" : "calc(100%/3 - 1rem - 0.01px)"};
  }
  @media screen and (max-width: 768px) {
    width: ${({ type }) => type === 'sm' ? "22.5rem" : "calc(100%/2 - 1rem - 0.01px)"};
    margin-left: ${({ type }) => type === 'sm' && "1rem"};
  }
  
`
export const Image = styled.img<{ type?: string }>`
  width: ${({ type }) => type === 'sm' ? "60%" : "100%"};
  height: ${({ type }) => type === 'sm' ? "7.5rem" : "12.625rem"};
  background-color: #999;
  `
export const Details = styled.div<{ type?: string }>`
  display: flex;
  margin-top: ${({ type }) => type !== 'sm' && ' 1rem'};
  gap: .75rem;
`
export const ChannelImage = styled.img<{ type?: string }>`
  display: ${({ type }) => type === 'sm' && 'none'};
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
`
export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: .375rem;
`
export const Title = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`
export const ChannelName = styled.h2`
  font-size: .875rem;
  color: ${({ theme }) => theme.textSoft};
`
export const Info = styled.div`
  font-size: .875rem;
  color: ${({ theme }) => theme.textSoft};
`
