/**
 * Manipula a autenticação do usuário, redirecionando para o servidor Keycloak ou obtendo tokens de acesso.
 * @returns {Promise<boolean>} - Uma promessa que resolve para verdadeiro se a autenticação for bem-sucedida, ou falso caso contrário.
 */
export const handleAuth = () => {
  const initialToken = localStorage.getItem("@auth/access_token");

  console.log("initialToken", initialToken);
};
