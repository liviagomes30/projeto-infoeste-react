import {
  Button,
  Nav,
  Wrapper,
  Image,
  List,
  ListItem,
  NavLink,
} from "./navbar.styles";
import logoFipp from "../../assets/images/logo-fipp.png";
import logoUnoeste from "../../assets/images/logo-unoeste.png";

export const Navbar = () => {
  const openLink = () => {
    const url = "https://www.unoeste.br/";
    window.open(url, "_blank");
  };

  return (
    <Wrapper>
      <Nav>
        <Image src={logoFipp} alt="logo FIPP" />
        <List>
          <ListItem>
            <NavLink to="/">Home</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/corpo-docente">Corpo Docente</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/contato">Contato</NavLink>
          </ListItem>
          <ListItem>
            <Button onClick={openLink}>
              <Image src={logoUnoeste} alt="logo Unoeste" />
            </Button>
          </ListItem>
        </List>
      </Nav>
    </Wrapper>
  );
};
