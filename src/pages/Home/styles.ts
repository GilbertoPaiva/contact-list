import styled from 'styled-components'
import { colors, breakpoints } from '../../styles'

export const HomeWrapper = styled.main`
  max-width: 960px;
  margin: 0 auto;
  padding: 36px 24px 48px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 24px 16px 40px;
  }
`

export const PageSubtitle = styled.p`
  font-size: 0.95rem;
  color: ${colors.textMuted};
  margin-bottom: 28px;
`
