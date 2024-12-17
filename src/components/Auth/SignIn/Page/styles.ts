import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export default {
  Container,
};
