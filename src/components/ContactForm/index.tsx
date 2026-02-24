import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import { add, edit, Contact } from '../../store/reducers/contacts'
import {
  FormWrapper,
  FormTitle,
  FormGrid,
  FieldGroup,
  Label,
  Input,
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

const emptyForm: FormState = { name: '', email: '', phone: '' }

const ContactForm = ({ contactToEdit, onCancelEdit }: Props) => {
  const dispatch = useDispatch()
  const [form, setForm] = useState<FormState>(emptyForm)

  const isEditing = !!contactToEdit

  useEffect(() => {
    if (contactToEdit) {
      setForm({
        name: contactToEdit.name,
        email: contactToEdit.email,
        phone: contactToEdit.phone
      })
    } else {
      setForm(emptyForm)
    }
  }, [contactToEdit])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const trimmed = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim()
    }

    if (!trimmed.name || !trimmed.email || !trimmed.phone) {
      alert('Preencha todos os campos.')
      return
    }

    if (isEditing && contactToEdit) {
      dispatch(edit({ id: contactToEdit.id, ...trimmed }))
      onCancelEdit?.()
    } else {
      dispatch(add({ id: uuidv4(), ...trimmed }))
      setForm(emptyForm)
    }
  }

  const handleCancel = () => {
    setForm(emptyForm)
    onCancelEdit?.()
  }

  return (
    <FormWrapper>
      <FormTitle>{isEditing ? 'Editar Contato' : 'Novo Contato'}</FormTitle>
      <FormGrid onSubmit={handleSubmit}>
        <FieldGroup>
          <Label htmlFor="name">Nome Completo</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Ex: João da Silva"
            value={form.name}
            onChange={handleChange}
          />
        </FieldGroup>

        <FieldGroup>
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Ex: joao@email.com"
            value={form.email}
            onChange={handleChange}
          />
        </FieldGroup>

        <FieldGroup>
          <Label htmlFor="phone">Telefone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Ex: (11) 99999-9999"
            value={form.phone}
            onChange={handleChange}
          />
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
