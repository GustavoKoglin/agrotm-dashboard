import { MenuOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import React, { FC, ReactElement, ReactNode } from "react";

import S from "./styles";
export interface ItemProps {
  title: string;
  onClick: () => void;
  icon: ReactNode;
  typeButton?: "Danger" | "Success" | "Default";
}

export interface MenuActionsProps {
  items: Array<ItemProps>;
}

const MenuActions: FC<MenuActionsProps> = ({ items }): ReactElement => {
  const handleItemsMenu = () => {
    const dataMenu = items.map((item: ItemProps, key) => {
      return (
        <Menu.Item key={key} onClick={item.onClick}>
          <S.BoxActions type={item.typeButton}>
            {item.icon}
            <span>{item.title}</span>
          </S.BoxActions>
        </Menu.Item>
      );
    });

    return <Menu>{dataMenu}</Menu>;
  };

  return (
    <Dropdown overlay={handleItemsMenu} trigger={["click"]}>
      <MenuOutlined />
    </Dropdown>
  );
};

export default MenuActions;
