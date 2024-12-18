import { Form as FormAntd } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 36px;
`;

export const TitleLogo = styled.span`
  font-size: 42px;
  line-height: 42px;
  font-weight: 700;
`;

export const SubTitleLogo = styled.span`
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
`;

export const Form = styled(FormAntd)`
  width: 500px;
  padding: 48px 24px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 1px 1px 10px #bdbdbd;
  display: flex;
  flex-direction: column;
  border-top: 5px solid #007bff;

  @media (max-width: 600px) {
    width: 100%;
  }

  @media (max-width: 450px) {
    padding: 24px 12px;
  }

  .ant-form-item-label > label {
    font-size: 18px;
  }

  .ant-input:placeholder-shown {
    font-size: 16px;

    @media (max-width: 450px) {
      font-size: 14px;
    }
  }

  a {
    text-align: center;
    padding-top: 8px;

    @media (max-width: 450px) {
      font-size: 12px;
      padding-top: 6px;
    }
  }
`;

export const TitleForm = styled.span`
  font-size: 28px;
  font-weight: 700;
  text-align: center;

  @media (max-width: 450px) {
    font-size: 24px;
  }
`;

export const SubTitleForm = styled.span`
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 38px;
  color: #848484;
  text-align: center;

  @media (max-width: 450px) {
    font-size: 14px;
  }
`;

export const Button = styled.button`
  margin-top: 8px;
  border-radius: 6px;
  padding: 8px 6px;
  background-color: #007bff;
  color: #fff;
  border: none;
  font-size: 16px;
  margin-bottom: 8px;
  cursor: pointer;

  @media (max-width: 450px) {
    font-size: 14px;
  }

  &:hover {
    background-color: #0f6dd3;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 8px;

  .ant-form-item {
    width: 98%;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default {
  Container,
  Logo,
  TitleLogo,
  SubTitleLogo,
  Form,
  TitleForm,
  SubTitleForm,
  Button,
  Header,
  Body,
  Footer,
};
