import { UserOutlined } from "@ant-design/icons";
import React, { FC, ReactElement } from "react";

import S from "./styles";

const HeaderPage: FC = (): ReactElement => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.CircleProfile>
          <UserOutlined />
        </S.CircleProfile>
      </S.Wrapper>
    </S.Container>
  );
};

export default HeaderPage;
