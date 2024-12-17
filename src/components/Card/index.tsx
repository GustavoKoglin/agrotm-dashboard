import { Space } from "antd";
import React, { FC, ReactElement, ReactNode } from "react";
import { CSSProperties } from "styled-components";

import S from "./styles";

interface CardProps {
  children: ReactNode;
  title: string;
  filtros?: ReactNode;
  style?: CSSProperties;
}

const Card: FC<CardProps> = ({
  children,
  title,
  filtros,
  style,
}): ReactElement => (
  <S.CardAntd
    id="cardAntd"
    style={style}
    title={
      <S.BoxTitle>
        <span>{title}</span>
      </S.BoxTitle>
    }
    extra={
      <Space
        direction="horizontal"
        align="center"
        style={{ columnGap: "16px" }}
      >
        {filtros}
      </Space>
    }
  >
    {children}
  </S.CardAntd>
);

export default Card;
