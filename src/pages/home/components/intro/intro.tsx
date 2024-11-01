import { Wrapper, TitleWrapper, BlueTitle, Title } from "./intro.styles";
// Certifique-se de importar os componentes Title e BlueTitle, caso estejam em outro arquivo

export const Intro = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>
          Desde <BlueTitle>1987</BlueTitle> formando profissionais e dominando o
          mercado de <BlueTitle>TI</BlueTitle>
        </Title>
      </TitleWrapper>
    </Wrapper>
  );
};
