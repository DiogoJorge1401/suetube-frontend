import styled from 'styled-components'

export const Container = styled.div`
  margin: 1.5rem;
  min-height: 100vh;

  display: flex;
  gap: 1.5rem;

  @media screen and (max-width: 768px) { 
    flex-direction: column;
    margin: 0 0 1.5rem;
  }
`
export const Content = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  gap: .75rem;
`
export const VideoWrapper = styled.div`
  height: 56.25vw;
  max-height: calc(100vh - 10.5625rem);
  min-height: 30rem;
`

export const VideoFrame = styled.video`
  height: 100%;
  max-height: 45rem;
  width: 100%;
  object-fit: contain;
  
  outline: none;
`
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: .625rem;

   @media screen and (max-width: 768px) { 
    padding: .25rem 1rem;
  }
`
export const Title = styled.h1`
  font-size: 1.125rem;
  font-weight: 400;
`
export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`
export const Buttons = styled.div`
  display: flex;
  gap: 1.25rem;
`
export const Button = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  cursor: pointer;
  flex: 1;
`
export const Hr = styled.hr`
  margin: 1rem 0;
  border: 0.5px solid ${({ theme }) => theme.soft};
`
export const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ChannelInfo = styled.div`
  display: flex;
  gap: 1rem;
`
export const ChannelImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`
export const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
`
export const ChannelName = styled.span`
  font-weight: 500;
`
export const ChannelCounter = styled.span`
  margin-top: .25rem;
  margin-bottom: 1.25rem;
  color: ${({ theme }) => theme.textSoft};
  font-size: 0.75rem;
`
export const Description = styled.p`
  font-size: 0.875em;
`
export const Subscribe = styled.button<{ isSubscribed: boolean }>`
  background-color: ${({ isSubscribed }) => isSubscribed ? 'rgba(255, 255, 255, 0.1)' : 'rgb(204, 0, 0);'};
  font-weight: 500;
  color: #fff;
  transition: .3s;

  border: none;
  outline: none;
  border-radius: .25rem;

  height: max-content;
  padding: .625rem 1.25rem;
  cursor: pointer;
  
  &:hover{
    background-color:${({ isSubscribed }) => isSubscribed ? 'rgb(204, 0, 0)' : 'rgba(255, 255, 255, 0.1)'};
  }
`