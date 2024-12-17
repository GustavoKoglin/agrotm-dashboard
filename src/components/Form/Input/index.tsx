import React, { FC, ReactElement } from "react";

import S from "./styles";

interface InputProps {
  standard?: boolean;
  placeholder: string;
  type?: string;
}

const Input: FC<InputProps> = ({
  standard = false,
  placeholder,
  type = "text",
  ...rest
}): ReactElement => {
  return (
    <S.Input
      {...rest}
      placeholder={placeholder}
      standard={standard}
      type={type}
    />
  );
};

export default Input;
