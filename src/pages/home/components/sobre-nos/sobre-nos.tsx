import { CardContent } from "./card-content";
import { Card, Message, SubTitle, Title, Wrapper } from "./sobre-nos.styles";
import { CardType } from "./type";

export const SobreNos = () => {
  const cards: CardType[] = CardContent();
  return (
    <Wrapper>
      <Title>Sobre nós</Title>
      {cards.map((card) => (
        <Card key={card.id}>
          <Message>{card.message}</Message>
        </Card>
      ))}
    </Wrapper>
  );
};
