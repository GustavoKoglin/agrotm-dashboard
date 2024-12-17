import { LoadingOutlined } from "@ant-design/icons";
import Input from "~/components/Form/Input";
import useAuthService from "~/lib/services/auth";
import { Form, Spin, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, ReactElement, useState } from "react";

import S from "./styles";

const FormPage: FC = (): ReactElement => {
  const [form] = Form.useForm();
  const service = useAuthService();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    form.validateFields().then(async (values: any) => {
      setIsLoading(true);

      const payload = {
        user: values.emailOrCpf,
        password: values.password,
      };

      try {
        const resposta = await service.signIn(payload);

        if (!resposta.sucesso) {
          message.error(resposta.message);
          setIsLoading(false);
          return;
        }

        message.success("Logado com sucesso!");
        setIsLoading(false);
        router.push("/home");

        return true;
      } catch (ex: any) {
        message.error(ex || "Erro ao salvar os dados");
        return false;
      }
    });
  };

  return (
    <S.Container>
      <S.Logo>
        <S.TitleLogo>PAULO JORGE</S.TitleLogo>
        <S.SubTitleLogo>Mecânia automotiva</S.SubTitleLogo>
      </S.Logo>

      <S.Form form={form} layout="vertical" name="nest-messages">
        <S.Header>
          <S.TitleForm>Bem-vindo de volta!</S.TitleForm>
          <S.SubTitleForm>
            Por favor, faça o login para acessar sua conta.
          </S.SubTitleForm>
        </S.Header>

        <S.Body>
          <Form.Item
            name="emailOrCpf"
            rules={[
              { required: true, message: "O E-mail ou CPF é obrigatório!" },
            ]}
          >
            <Input placeholder="E-mail ou CPF" standard />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "A Senha é obrigatória!" }]}
          >
            <Input placeholder="Senha" standard type="password" />
          </Form.Item>
        </S.Body>

        <S.Footer>
          <S.Button type="submit" onClick={handleSubmit}>
            {isLoading ? (
              <Spin
                indicator={<LoadingOutlined />}
                style={{ fontSize: 8 }}
                spinning
              />
            ) : (
              "ENTRAR"
            )}
          </S.Button>

          <Link href="/recuperar-senha">Esqueceu sua senha?</Link>
        </S.Footer>
      </S.Form>
    </S.Container>
  );
};

export default FormPage;
