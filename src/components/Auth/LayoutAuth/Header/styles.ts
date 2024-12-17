import { Layout } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 20px;
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  svg {
    font-size: 22px;
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  height: 56px;
  width: 56px;

  background: transparent;

  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CircleProfile = styled.div`
  width: 32px;
  height: 32px;
  border: 2px solid #fff;
  display: flex;
  border-radius: 50%;
  cursor: pointer;
`;

export const AvatarProfile = styled.img`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: #fff;
`;

export default {
  Container,
  Wrapper,
  CircleProfile,
  AvatarProfile,
};
