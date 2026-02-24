import { useDispatch } from 'react-redux'
import { remove, Contact } from '../../store/reducers/contacts'
import {
  Card,
  Avatar,
  Info,
  ContactName,
  ContactDetail,
  Actions,
  ActionButton
} from './styles'

type Props = {
  contact: Contact
  onEdit: (contact: Contact) => void
}

const getInitials = (name: string) => {
  const parts = name.trim().split(' ')
  if (parts.length === 1) return parts[0][0].toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

const ContactCard = ({ contact, onEdit }: Props) => {
  const dispatch = useDispatch()

  const handleRemove = () => {
    if (window.confirm(`Remover "${contact.name}" da lista?`)) {
      dispatch(remove(contact.id))
    }
  }

  return (
    <Card>
      <Avatar>{getInitials(contact.name)}</Avatar>
      <Info>
        <ContactName>{contact.name}</ContactName>
        <ContactDetail>
          <span>✉ {contact.email}</span>
          <span>📞 {contact.phone}</span>
        </ContactDetail>
      </Info>
      <Actions>
        <ActionButton
          $variant="edit"
          onClick={() => onEdit(contact)}
          title="Editar contato"
        >
          ✏
        </ActionButton>
        <ActionButton
          $variant="remove"
          onClick={handleRemove}
          title="Remover contato"
        >
          🗑
        </ActionButton>
      </Actions>
    </Card>
  )
}

export default ContactCard
