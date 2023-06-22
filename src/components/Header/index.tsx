import * as S from "./styles"
import Logo from "../../assets/truck.svg"
export function Header() {
  return (
    <S.Header>
      <picture>
        <img src={Logo} alt="Logo" />
      </picture>
      <S.NavBar>
        <input id="menu-toggle" type="checkbox" />
        <label htmlFor="menu-toggle">
          <div className="menu-hamburger">
            <span className="hamburger" />
          </div>
        </label>
        <ul>
          <li>
            <a href="/">Página Inicial</a>
          </li>
          <li>
            <a href="/lista">Lista</a>
          </li>
        </ul>
      </S.NavBar>
    </S.Header>
  )
}