import {
  Buttons,
  EurofarmaLogo,
  Homepage,
  MainContainner,
  RoutingButtons,
  SearchLibrary,
  SearchSection,
} from "./styles";
import eurofarmaLogo from "../../assets/eurofarma_logo.png";
import { Link } from "react-router-dom";

export function Home() {
  const searchLibrary = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      location.href = `/biblioteca?search=${(e.target as HTMLInputElement).value}`;

    }

  }

  return (
    <Homepage>
      <MainContainner>
        <SearchSection>
          <EurofarmaLogo src={eurofarmaLogo} />

          <SearchLibrary
            type="text"
            placeholder="Buscar na biblioteca..."
            onKeyDown={(e) => searchLibrary(e)}
          />
        </SearchSection>

        <RoutingButtons>
          <Link to="/trilha">
            <Buttons>Minha Jornada</Buttons>
          </Link>

          <Link to="/biblioteca">
            <Buttons>Biblioteca</Buttons>
          </Link>
        </RoutingButtons>
      </MainContainner>
    </Homepage>
  );
}
