import styled, { css } from "styled-components";

interface ContainerProps {
  fullscreen: boolean;
}

export const Container = styled.div<ContainerProps>`
  ${({ fullscreen }) =>
    fullscreen &&
    css`
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      height: 100vh;
    `};
`;

export default {
  Container,
};
