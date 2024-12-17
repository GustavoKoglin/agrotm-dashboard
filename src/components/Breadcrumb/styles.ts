import { Breadcrumb as BreadcrumbAntd } from "antd";
import styled from "styled-components";

export const Breadcrumb = styled(BreadcrumbAntd)`
  padding-bottom: 16px;

  .active-breadcrumb {
    font-weight: 600;
  }
`;

export default {
  Breadcrumb,
};
