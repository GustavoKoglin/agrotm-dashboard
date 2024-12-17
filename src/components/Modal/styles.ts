import { Modal } from "antd";
import styled from "styled-components";

export const ModalAntd = styled(Modal)`
  .ant-modal-content {
    padding: 0;
    border-radius: 8px !important;

    .ant-modal-header {
      padding: 12px;
      border-bottom: 1px solid #dadada;
      border-radius: 8px 8px 0px 0px !important;
      background: #f3f3f3;
    }

    .ant-modal-body {
      padding: 12px 12px 12px 12px;
      overflow: auto;
      max-height: 512px;
    }

    .ant-modal-footer {
      padding: 12px 12px 12px 12px;
      border-top: 1px solid #dadada;
      background: #f3f3f3;
      border-radius: 0px 0px 8px 8px !important;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: sticky;
      bottom: 0;
      background: #fff;
      z-index: 99;
    }
  }
`;

export default {
  ModalAntd,
};
