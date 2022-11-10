import { Container, Logo, BackItem, BackButton } from "./styles";
import logoImg from "@assets/logo.png";

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackItem />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
}
