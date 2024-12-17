import React, { FC, ReactElement } from "react";

import S from "./styles";
import { Spin } from "antd";

interface LoadingProps {
  size: "small" | "default" | "large";
  fullscreen?: boolean;
}

const Loading: FC<LoadingProps> = ({
  size,
  fullscreen = false,
}): ReactElement => {
  return (
    <S.Container fullscreen={fullscreen}>
      <Spin size={size} />
    </S.Container>
  );
};

export default Loading;
