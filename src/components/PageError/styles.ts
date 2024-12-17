import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
  gap: 20px;
`;

const ContainerSVG = styled.div`
  margin-bottom: 0rem;
`;

const Titulo = styled.h1`
  color: #2e5d7d;
  font-family: "Source Sans Pro";
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.5rem;
`;

const Paragrafo = styled.p`
  color: #2e5d7d;
  text-align: center;
  font-family: "Source Sans Pro";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
`;

export default { Titulo, Paragrafo, ContainerSVG, Container };
