import { Layout } from "antd";
import styled from "styled-components";
export const { Content: AntdContent } = Layout;

export const Container = styled.div`
  padding: 20px;
`;

export const Title = styled.h1`
  color: black;
`;

export default {
  Container,
  Title,
};
