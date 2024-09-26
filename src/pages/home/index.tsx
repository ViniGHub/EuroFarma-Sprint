import { Buttons, EurofarmaLogo, Homepage, MainContainner, RoutingButtons, SearchLibrary, SearchSection } from "./styles";
import eurofarmaLogo from '../../assets/eurofarma_logo.png'
import { Link } from "react-router-dom";

export function Home() {
    return (
        <Homepage>
          <MainContainner>
            <SearchSection>

              <EurofarmaLogo src={eurofarmaLogo}/>
    
              <SearchLibrary
                type="text"
                placeholder="Buscar na biblioteca..."
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
    )
}