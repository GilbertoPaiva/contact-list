import styled from 'styled-components'
import { colors } from '../../styles'

export const ListWrapper = styled.section``

export const ListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`

export const ListTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${colors.text};
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 20px;
    background: ${colors.secondary};
    border-radius: 2px;
  }
`

export const Counter = styled.span`
  background: ${colors.primary};
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 2px 10px;
  border-radius: 20px;
`

export const SearchInput = styled.input`
  height: 40px;
  padding: 0 14px 0 36px;
  border: 2px solid ${colors.border};
  border-radius: 10px;
  font-size: 0.9rem;
  color: ${colors.text};
  background: ${colors.surface};
  width: 220px;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.12);
  }

  @media (max-width: 480px) {
    width: 160px;
  }
`

export const SearchWrapper = styled.div`
  position: relative;

  &::before {
    content: '🔍';
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.8rem;
    pointer-events: none;
  }
`

export const ContactUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const EmptyState = styled.div`
  text-align: center;
  padding: 48px 24px;
  background: ${colors.surface};
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
`

export const EmptyIcon = styled.p`
  font-size: 3rem;
  margin-bottom: 12px;
`

export const EmptyText = styled.p`
  font-size: 1rem;
  color: ${colors.textMuted};
`
