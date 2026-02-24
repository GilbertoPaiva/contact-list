import { useState } from 'react'
import { Contact } from '../../store/reducers/contacts'
import ContactForm from '../../components/ContactForm'
import ContactList from '../../components/ContactList'
import { HomeWrapper } from './styles'

const Home = () => {
  const [contactToEdit, setContactToEdit] = useState<Contact | null>(null)

  const handleEdit = (contact: Contact) => {
    setContactToEdit(contact)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCancelEdit = () => {
    setContactToEdit(null)
  }

  return (
    <HomeWrapper>
      <ContactForm contactToEdit={contactToEdit} onCancelEdit={handleCancelEdit} />
      <ContactList onEdit={handleEdit} />
    </HomeWrapper>
  )
}

export default Home
