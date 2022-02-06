import { createContext, useContext, useMemo, useState } from 'react'

const initialState = [
  {
    id: Math.random(),
    size: Math.random(),
    price: 3000 + 800 * Math.random(),
    type: 'buy',
  },
]

const context = createContext()

const BuyProvider = ({ children }) => {
  const [state, setState] = useState(initialState)

  const value = useMemo(() => [state, setState], [state])

  return <context.Provider value={value}>{children}</context.Provider>
}

const useBuyOrders = () => {
  const [state, setState] = useContext(context)

  const setBuy = () =>
    setState(prev => [
      ...prev,
      {
        id: Math.random(),
        size: Math.random(),
        price: 3000 + 800 * Math.random(),
        type: 'buy',
      },
    ])

  return [state, setBuy]
}

export { BuyProvider, useBuyOrders }
