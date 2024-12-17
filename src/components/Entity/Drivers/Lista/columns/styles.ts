import styled from "styled-components";

interface BoxActionProps {
  danger?: boolean;
}

export const BoxActions = styled.div<BoxActionProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 8px;
  font-size: 16px;

  span {
    color: ${({ danger }) => (danger ? "red" : "black")};
  }
`;

export default {
  BoxActions,
};
