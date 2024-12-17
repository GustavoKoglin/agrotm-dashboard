import S from "./styles";

const Erros = () => {
  return (
    <S.Container>
      <S.Titulo>Algo deu errado.</S.Titulo>
      <S.Paragrafo>
        Tente recarregar a página em alguns minutos.
        <br />
        Se o erro persistir, entre em contato com a equipe de suporte.
      </S.Paragrafo>
    </S.Container>
  );
};

export default Erros;
