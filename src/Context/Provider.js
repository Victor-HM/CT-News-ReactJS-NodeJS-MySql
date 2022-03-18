import React, { createContext, useState, useContext } from 'react';
import Context from './Context';

const StoreProvider = ({ children }) => {
  const ctx = useContext(Context)

  const [auth, setAuth] = useState(ctx.auth)
  const [user, setUser] = useState(ctx.user)

  return (
    <Context.Provider
      value = {{
        auth,
        setAuth,
        user,
        setUser
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default StoreProvider