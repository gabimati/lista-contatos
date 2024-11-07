import { configureStore } from '@reduxjs/toolkit'

import contatoReducer from './reducers/contatos'

const store = configureStore({
  reducer: {
    contatos: contatoReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['contatos/cadastrar'] // Ignora o check de serialização para a ação 'cadastrar'
      }
    })
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
