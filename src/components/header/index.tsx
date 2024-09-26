import { HeaderContainner, HeaderRight, LogoMatamba } from "./styles";
import { Link } from "react-router-dom";
import logoMatamba from "../../assets/matamba_logo.png"
import userLogo from "../../assets/icone_user.png"

export function Header() {
    return (
        <HeaderContainner>
            <Link  to="/">
              <LogoMatamba src={logoMatamba}/>
            </Link>
    
            <HeaderRight>
              <Link to="/trilha">Treinamentos</Link>
              <Link to="/biblioteca">Biblioteca</Link>
              <div>
                <Link to="#">
                  <img src={userLogo}/>
                  <label>Faça seu login</label>
                </Link>
              </div>
            </HeaderRight>
          </HeaderContainner>
    )
}