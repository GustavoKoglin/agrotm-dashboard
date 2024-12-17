import { Input as InputAntd } from "antd";
import styled, { css } from "styled-components";

interface InputProps {
  standard: boolean;
}

export const Input = styled(InputAntd)<InputProps>`
  ${({ standard }) =>
    standard &&
    css`
      border-top: none;
      border-left: none;
      border-right: none;
      border-radius: 0px !important;
      padding: 4px;

      &:focus {
        box-shadow: none !important;
      }
    `};
`;

export default {
  Input,
};
