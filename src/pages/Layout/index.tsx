import { Outlet } from 'react-router-dom'
import * as S from './styles'
import { ComponentFooter, ComponentHeader } from '../../components'

export const Layout = () => {
  return (
    <>
      <ComponentHeader />
      <S.Main>
        <Outlet />
      </S.Main>
      <ComponentFooter />
    </>
  )
}
