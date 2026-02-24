import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Contact } from '../../store/reducers/contacts'
import ContactCard from '../ContactCard'
import {
  ListWrapper,
  ListHeader,
  ListTitle,
  Counter,
  SearchWrapper,
  SearchInput,
  ContactUl,
  EmptyState,
  EmptyIcon,
  EmptyText
} from './styles'

type Props = {
  onEdit: (contact: Contact) => void
}

const ContactList = ({ onEdit }: Props) => {
  const contacts = useSelector((state: RootState) => state.contacts.items)
  const [search, setSearch] = useState('')

  const filtered = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.phone.includes(search)
  )

  return (
    <ListWrapper>
      <ListHeader>
        <ListTitle>
          Contatos <Counter>{contacts.length}</Counter>
        </ListTitle>
        {contacts.length > 0 && (
          <SearchWrapper>
            <SearchInput
              type="text"
              placeholder="Buscar contato..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </SearchWrapper>
        )}
      </ListHeader>

      {filtered.length > 0 ? (
        <ContactUl>
          {filtered.map((contact) => (
            <ContactCard key={contact.id} contact={contact} onEdit={onEdit} />
          ))}
        </ContactUl>
      ) : (
        <EmptyState>
          <EmptyIcon>{contacts.length === 0 ? '👥' : '🔍'}</EmptyIcon>
          <EmptyText>
            {contacts.length === 0
              ? 'Nenhum contato ainda. Adicione seu primeiro contato acima!'
              : 'Nenhum contato encontrado para esta busca.'}
          </EmptyText>
        </EmptyState>
      )}
    </ListWrapper>
  )
}

export default ContactList
