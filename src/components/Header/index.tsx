import { HeaderWrapper, HeaderContent, HeaderTitle, HeaderIcon, HeaderSubtitle } from './styles'

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <HeaderIcon>📋</HeaderIcon>
        <div>
          <HeaderTitle>Lista de Contatos</HeaderTitle>
          <HeaderSubtitle>Gerencie seus contatos com facilidade</HeaderSubtitle>
        </div>
      </HeaderContent>
    </HeaderWrapper>
  )
}

export default Header
