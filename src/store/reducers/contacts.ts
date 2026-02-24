import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Contact = {
  id: string
  name: string
  email: string
  phone: string
}

type ContactsState = {
  items: Contact[]
}

const initialState: ContactsState = {
  items: []
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Contact>) => {
      state.items.push(action.payload)
    },
    remove: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((c) => c.id !== action.payload)
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const index = state.items.findIndex((c) => c.id === action.payload.id)
      if (index !== -1) {
        state.items[index] = action.payload
      }
    }
  }
})

export const { add, remove, edit } = contactsSlice.actions
export default contactsSlice.reducer
