import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderWrapper = styled.header`
  background: linear-gradient(135deg, ${colors.primaryDark} 0%, ${colors.primary} 100%);
  padding: 20px 0;
  box-shadow: 0 4px 12px rgba(67, 97, 238, 0.3);
`

export const HeaderContent = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  gap: 12px;
`

export const HeaderTitle = styled.h1`
  color: #fff;
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.5px;
`

export const HeaderIcon = styled.span`
  font-size: 1.8rem;
`
