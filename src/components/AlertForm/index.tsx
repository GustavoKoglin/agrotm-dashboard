import { Alert } from "antd";
import React, { FC, ReactElement } from "react";

import S from "./styles";

interface AlertFormProps {
  type: "error" | "info" | "success" | "warning";
  errors: Array<string>;
}

const AlertForm: FC<AlertFormProps> = ({ type, errors }): ReactElement => {
  return (
    <S.ContainerAlert>
      <Alert
        className="alert-form"
        message="Verifique os erros abaixo, e tente novamente."
        description={
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        }
        type={type}
        showIcon
      />
    </S.ContainerAlert>
  );
};

export default AlertForm;
