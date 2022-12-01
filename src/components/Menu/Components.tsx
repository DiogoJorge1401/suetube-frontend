import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  z-index: 1;
  height: 100vh;
  width: 20rem;

  overflow: hidden;
  overflow-y: auto;

  position: fixed;
  transform: translateY(3.5rem);
  top: -1px;

  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  font-size: 0.875rem;

  &::-webkit-scrollbar-button {
    height: 1rem;
  }

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 1rem;
  }

  &::-webkit-scrollbar-thumb {
    height: 3.5rem;
    border-radius: 0.5rem;
    border: 0.25rem solid transparent;
    background-clip: content-box;
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: #717171;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem 1.375rem 1.125rem;
  margin-bottom: 3.5rem;
`;
export const Item = styled(Link)`
  color: inherit;
  padding: 0.5rem 0.25rem;
  text-decoration: none;

  display: flex;
  align-items: center;
  gap: 1.25rem;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;
export const Hr = styled.hr`
  margin: 0.5rem 0;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;
export const Login = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

export const Title = styled.h2`
  font-size: 0.875rem;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 0.5rem;
`;
