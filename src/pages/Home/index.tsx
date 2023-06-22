import * as S from './styles'
import TruckLeft from "../../assets/truckleft.png"
import TruckRight from "../../assets/truckright.png"

export function Home() {
  return (
    <S.Section>
      <img src={TruckLeft} alt="Caminhão na esquerda" />
      <img src={TruckRight} alt="Caminhão na direita" />
    </S.Section>
  )
}
