import { AppstoreAddOutlined, HomeOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout } from "antd";
import { useRouter } from "next/router";
import React, { FC, ReactElement, ReactNode, useState } from "react";

const { Footer, Sider } = Layout;
import Header from "./Header";
import S from "./styles";

interface LayoutProps {
  children: ReactNode;
}

const App: FC<LayoutProps> = ({ children }): ReactElement => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  const itemsMenu: MenuProps["items"] = [
    {
      key: "1",
      icon: <HomeOutlined />,
      label: !collapsed && "Inicio",
      onClick: () => router.push("/home"),
    },
    {
      key: "2",
      icon: <AppstoreAddOutlined />,
      label: !collapsed && "Cadastros",
      children: [
        {
          key: "2-1",
          label: "Motoristas",
          onClick: () => router.push("/home/drivers"),
          className: "ant-submenu",
        },
      ],
    },
  ];

  return (
    <Layout>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <S.Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={itemsMenu}
        />
      </Sider>
      <Layout>
        <Header />
        <S.ContentAntd>{children}</S.ContentAntd>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
