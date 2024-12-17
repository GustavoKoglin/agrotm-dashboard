import styled, { css } from "styled-components";

interface BoxActionProps {
  type?: "Danger" | "Success" | "Default";
}

export const BoxActions = styled.div<BoxActionProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 8px;
  font-size: 16px;

  span {
    ${({ type }) =>
      type === "Danger" &&
      css`
        color: red;
      `};

    ${({ type }) =>
      type === "Default" &&
      css`
        color: #393939;
      `};

    ${({ type }) =>
      type === "Success" &&
      css`
        color: green;
      `};
  }
`;

export default {
  BoxActions,
};
