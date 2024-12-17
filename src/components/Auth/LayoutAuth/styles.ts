import { Layout, Menu as MenuAntd } from "antd";
import styled from "styled-components";
const { Content } = Layout;

export const Menu = styled(MenuAntd)`
  .ant-menu-title-content {
    padding-left: 8px;
  }

  .ant-submenu {
    padding-left: 24px !important;
  }
`;

export const ContentAntd = styled(Content)`
  padding: 24px;
  background-color: #f5f5f5;
  border-radius: 8px;
  padding-bottom: 76px;
  position: relative;
  height: auto;
  min-height: calc(100vh - 56px);
`;

export default {
  Menu,
  ContentAntd,
};
