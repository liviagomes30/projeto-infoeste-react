import { Intro } from "./components/intro/intro";
import { Mapa } from "./components/mapa/mapa";
import { Cursos } from "./components/cursos/cursos";
import { SobreNos } from "./components/sobre-nos/sobre-nos";
import { Duvidas } from "./components/duvidas/duvidas";
import { Footer } from "./components/footer/footer";

export const Home = () => {
  return (
    <>
      <Intro />
      <SobreNos />
      <Cursos />
      <Mapa />
      <Duvidas />
      <Footer />
    </>
  );
};
