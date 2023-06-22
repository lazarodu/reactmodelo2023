import * as S from "./styles"
import Face from "../../assets/face.svg"
import Insta from "../../assets/insta.svg"
import Linkedin from "../../assets/linkedin.svg"

export function Footer() {
  return (
    <S.Footer>
      <a href="https://facebook.com" target="_blank">
        <img src={Face} alt="Facebook" />
      </a>
      <img src={Insta} alt="Instagram" />
      <img src={Linkedin} alt="Linkedin" />
    </S.Footer>
  )
}