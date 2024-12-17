import React, { FC, ReactElement, ReactNode } from "react";

import S from "./styles";

interface ModalProps {
  children: ReactNode;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  footer: ReactNode;
  width?: number;
}

const Modal: FC<ModalProps> = ({
  children,
  footer,
  isOpen,
  onClose,
  title,
  width = 600,
}): ReactElement => {
  return (
    <S.ModalAntd
      title={title}
      open={isOpen}
      destroyOnClose
      onCancel={onClose}
      footer={footer}
      width={width}
      centered
    >
      {children}
    </S.ModalAntd>
  );
};

export default Modal;
