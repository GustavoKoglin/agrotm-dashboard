import useAxios from "~/lib/hooks/useAxios";
import useAuthStore from "~/lib/stores/useAuthStore";
import { Response } from "~/types/Response";

import { DriversProps } from "../drivers";

export interface ResponseAuth {
  sucesso?: boolean;
  user?: {
    name: string;
    email: string;
    access_token: string;
  };
  message?: string;
}

interface CredentialsProps {
  user: string;
  password: string;
}

type SignInProps = (credentials: CredentialsProps) => Promise<ResponseAuth>;

type RequisicaoRegistroRespostaStringType = (
  registro: DriversProps
) => Promise<Response>;

export interface ServicoType {
  signIn: SignInProps;
  post: RequisicaoRegistroRespostaStringType;
}

const useAuthService = (): ServicoType => {
  const api = useAxios();
  const { setToken } = useAuthStore();

  const signIn: SignInProps = (credentials: any) =>
    api
      ?.post<ResponseAuth>("auth/signIn", credentials)
      .then((response) => {
        if (response.data.user.access_token) {
          localStorage.setItem(
            "@auth/access_token",
            response.data.user.access_token
          );
          setToken(response.data.user.access_token);
        }

        return response.data;
      })
      .catch((error) => ({ ...error?.response?.data, sucesso: false }));

  const post: RequisicaoRegistroRespostaStringType = (registro) =>
    api
      .post<Response>("auth/signUp", registro)
      .then((response) => response.data)
      .catch((error) => ({ ...error?.response?.data, sucesso: false }));

  return {
    signIn,
    post,
  };
};

export default useAuthService;
