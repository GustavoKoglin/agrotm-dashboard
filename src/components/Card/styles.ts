import { Card } from "antd";
import styled from "styled-components";

export const CardAntd = styled(Card)`
  width: 100%;
  box-shadow: 0px 0px 5px #b7b7b7;
  border-radius: 4px;

  .ant-card-head {
    border-bottom: 1px solid #ced4da;
    display: flex;
    align-items: center;

    .ant-card-head-wrapper {
      width: 100%;

      .ant-card-head-title {
        padding: 0;
      }
    }
  }

  .ant-card-body {
    padding: 24px 16px;
    min-height: calc(100vh - 243px);

    .ant-select.ant-select-in-form-item {
      width: auto;
    }
  }
`;

export const BoxTitle = styled.div`
  display: flex;
  align-items: center;

  button {
    display: flex;
    align-items: flex-start;
    justify-content: center;

    span {
      svg {
        font-size: 16px !important;
      }
    }
  }

  span {
    font-weight: 600;
    line-height: 24px;
  }
`;

export default {
  CardAntd,
  BoxTitle,
};
