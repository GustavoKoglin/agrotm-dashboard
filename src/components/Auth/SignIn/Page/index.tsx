import React, { FC, ReactElement } from "react";

import Form from "../Form";

import S from "./styles";

const Page: FC = (): ReactElement => {
  return (
    <S.Container>
      <Form />
    </S.Container>
  );
};

export default Page;
