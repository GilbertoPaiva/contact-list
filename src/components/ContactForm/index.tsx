import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import { add, edit, Contact } from '../../store/reducers/contacts'
import { RootState } from '../../store'
import { formatPhone, isValidPhone, isValidEmail } from '../../utils/validators'
import {
  FormWrapper,
  FormTitle,
  FormGrid,
  FieldGroup,
  Label,
  Input,
  ErrorText,
  SuccessBanner,
  ButtonsRow,
  SubmitButton,
  CancelButton
} from './styles'

type Props = {
  contactToEdit?: Contact | null
  onCancelEdit?: () => void
}

type FormState = {
  name: string
  email: string
  phone: string
}

type Touched = {
  name: boolean
  email: boolean
  phone: boolean
}

type InputStatus = 'default' | 'error' | 'success'

const emptyForm: FormState = { name: '', email: '', phone: '' }
const emptyTouched: Touched = { name: false, email: false, phone: false }

const ContactForm = ({ contactToEdit, onCancelEdit }: Props) => {
  const dispatch = useDispatch()
  const contacts = useSelector((state: RootState) => state.contacts.items)

  const [form, setForm] = useState<FormState>(emptyForm)
  const [touched, setTouched] = useState<Touched>(emptyTouched)
  const [showSuccess, setShowSuccess] = useState(false)

  const isEditing = !!contactToEdit

  useEffect(() => {
    if (contactToEdit) {
      setForm({
        name: contactToEdit.name,
        email: contactToEdit.email,
        phone: contactToEdit.phone
      })
      setTouched(emptyTouched)
    } else {
      setForm(emptyForm)
      setTouched(emptyTouched)
    }
  }, [contactToEdit])

  // Validação centralizada — retorna objeto de erros para o form atual
  const getErrors = (data: FormState): Partial<Record<keyof FormState, string>> => {
    const errors: Partial<Record<keyof FormState, string>> = {}

    if (!data.name.trim()) {
      errors.name = 'Nome é obrigatório.'
    }

    if (!data.email.trim()) {
      errors.email = 'E-mail é obrigatório.'
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Informe um e-mail válido (ex: joao@email.com).'
    } else {
      const duplicate = contacts.find(
        (c) =>
          c.email.toLowerCase() === data.email.trim().toLowerCase() &&
          c.id !== contactToEdit?.id
      )
      if (duplicate) errors.email = 'Este e-mail já está cadastrado.'
    }

    const rawPhone = data.phone.replace(/\D/g, '')
    if (!rawPhone) {
      errors.phone = 'Telefone é obrigatório.'
    } else if (!isValidPhone(rawPhone)) {
      errors.phone = 'Número inválido. Use (XX) XXXX-XXXX ou (XX) XXXXX-XXXX.'
    } else {
      const duplicate = contacts.find(
        (c) =>
          c.phone.replace(/\D/g, '') === rawPhone && c.id !== contactToEdit?.id
      )
      if (duplicate) errors.phone = 'Este telefone já está cadastrado.'
    }

    return errors
  }

  const errors = getErrors(form)
  const isFormValid = Object.keys(errors).length === 0

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === 'phone') {
      setForm((prev) => ({ ...prev, phone: formatPhone(value) }))
    } else {
      setForm((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTouched({ name: true, email: true, phone: true })
    if (!isFormValid) return

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim()
    }

    if (isEditing && contactToEdit) {
      dispatch(edit({ id: contactToEdit.id, ...payload }))
      onCancelEdit?.()
    } else {
      dispatch(add({ id: uuidv4(), ...payload }))
      setForm(emptyForm)
      setTouched(emptyTouched)
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 3500)
    }
  }

  const handleCancel = () => {
    setForm(emptyForm)
    setTouched(emptyTouched)
    onCancelEdit?.()
  }

  const getStatus = (field: keyof FormState): InputStatus => {
    if (!touched[field]) return 'default'
    return errors[field] ? 'error' : 'success'
  }

  return (
    <FormWrapper>
      <FormTitle>{isEditing ? 'Editar Contato' : 'Novo Contato'}</FormTitle>

      {showSuccess && (
        <SuccessBanner role="status">
          ✓ Contato adicionado com sucesso!
        </SuccessBanner>
      )}

      <FormGrid onSubmit={handleSubmit} noValidate>
        <FieldGroup>
          <Label htmlFor="name">Nome Completo</Label>
          <Input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Ex: João da Silva"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            $status={getStatus('name')}
            aria-invalid={touched.name && !!errors.name}
            aria-describedby="name-error"
          />
          <ErrorText id="name-error" role="alert">
            {touched.name && errors.name ? `⚠ ${errors.name}` : ''}
          </ErrorText>
        </FieldGroup>

        <FieldGroup>
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="Ex: joao@email.com"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            $status={getStatus('email')}
            aria-invalid={touched.email && !!errors.email}
            aria-describedby="email-error"
          />
          <ErrorText id="email-error" role="alert">
            {touched.email && errors.email ? `⚠ ${errors.email}` : ''}
          </ErrorText>
        </FieldGroup>

        <FieldGroup>
          <Label htmlFor="phone">Telefone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            placeholder="(XX) XXXXX-XXXX"
            value={form.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength={15}
            $status={getStatus('phone')}
            aria-invalid={touched.phone && !!errors.phone}
            aria-describedby="phone-error"
          />
          <ErrorText id="phone-error" role="alert">
            {touched.phone && errors.phone ? `⚠ ${errors.phone}` : ''}
          </ErrorText>
        </FieldGroup>

        <ButtonsRow>
          <SubmitButton type="submit" $isEditing={isEditing}>
            {isEditing ? '✔ Salvar Alterações' : '+ Adicionar Contato'}
          </SubmitButton>
          {isEditing && (
            <CancelButton type="button" onClick={handleCancel}>
              Cancelar
            </CancelButton>
          )}
        </ButtonsRow>
      </FormGrid>
    </FormWrapper>
  )
}

export default ContactForm
