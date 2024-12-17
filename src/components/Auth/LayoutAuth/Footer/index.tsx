import { Layout } from "antd";
import React, { FC, ReactElement } from "react";

const { Footer } = Layout;

const FooterPage: FC = (): ReactElement => {
  return (
    <Footer style={{ textAlign: "center" }}>Mecânica Paulo Jorge ©2023</Footer>
  );
};

export default FooterPage;
