import styled from 'styled-components'
import { colors } from '../../styles'

export const FormWrapper = styled.div`
  background: ${colors.surface};
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin-bottom: 32px;
`

export const FormTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${colors.primary};
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 20px;
    background: ${colors.primary};
    border-radius: 2px;
  }
`

export const FormGrid = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${colors.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

export const Input = styled.input<{ $status?: 'error' | 'success' | 'default' }>`
  height: 44px;
  padding: 0 14px;
  border: 2px solid
    ${({ $status }) =>
      $status === 'error'
        ? colors.danger
        : $status === 'success'
        ? colors.success
        : colors.border};
  border-radius: 10px;
  font-size: 0.95rem;
  color: ${colors.text};
  background: ${colors.background};
  transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
  width: 100%;

  &:focus {
    border-color: ${({ $status }) =>
      $status === 'error' ? colors.danger : colors.primary};
    box-shadow: 0 0 0 3px
      ${({ $status }) =>
        $status === 'error'
          ? 'rgba(230, 57, 70, 0.15)'
          : 'rgba(67, 97, 238, 0.15)'};
    background: ${colors.surface};
  }

  &::placeholder {
    color: ${colors.border};
  }
`

export const ErrorText = styled.span`
  font-size: 0.78rem;
  color: ${colors.danger};
  min-height: 20px;
  display: block;
  padding-top: 2px;
`

export const SuccessBanner = styled.div`
  background: rgba(46, 196, 182, 0.12);
  border: 1.5px solid ${colors.success};
  color: ${colors.success};
  border-radius: 10px;
  padding: 10px 16px;
  font-size: 0.88rem;
  font-weight: 600;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
`

export const ButtonsRow = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 4px;

  @media (min-width: 769px) {
    grid-column: 1 / -1;
  }
`

export const SubmitButton = styled.button<{ $isEditing: boolean }>`
  height: 44px;
  padding: 0 24px;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  background: ${({ $isEditing }) => ($isEditing ? colors.success : colors.primary)};
  color: #fff;
  transition: opacity 0.2s, transform 0.1s;

  &:hover {
    opacity: 0.88;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`

export const CancelButton = styled.button`
  height: 44px;
  padding: 0 20px;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  background: transparent;
  color: ${colors.textMuted};
  border: 2px solid ${colors.border};
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: ${colors.border};
    color: ${colors.text};
  }
`
