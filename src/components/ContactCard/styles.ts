import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.li`
  background: ${colors.surface};
  border-radius: 14px;
  padding: 18px 20px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  border: 1.5px solid transparent;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: box-shadow 0.22s, transform 0.22s, border-color 0.22s;

  &:hover {
    box-shadow: 0 6px 20px rgba(67, 97, 238, 0.13);
    transform: translateY(-2px);
    border-color: rgba(67, 97, 238, 0.18);
  }

  @media (max-width: 480px) {
    padding: 14px 16px;
    gap: 12px;
  }
`

export const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${colors.primary}, ${colors.primaryDark});
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  flex-shrink: 0;
`

export const Info = styled.div`
  flex: 1;
  min-width: 0;
`

export const ContactName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ContactDetail = styled.div`
  font-size: 0.85rem;
  color: ${colors.textMuted};
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (min-width: 540px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 4px 16px;
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 8px;
  flex-shrink: 0;
`

export const ActionButton = styled.button<{ $variant: 'edit' | 'remove' }>`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, transform 0.1s;

  background: ${({ $variant }) =>
    $variant === 'edit' ? `rgba(67, 97, 238, 0.1)` : `rgba(230, 57, 70, 0.1)`};

  color: ${({ $variant }) =>
    $variant === 'edit' ? colors.primary : colors.danger};

  &:hover {
    background: ${({ $variant }) =>
      $variant === 'edit' ? colors.primary : colors.danger};
    color: #fff;
    transform: scale(1.1);
  }
`
