import { createContext, useContext, useMemo, useState } from 'react'

const initialState = [
  {
    id: Math.random(),
    size: Math.random(),
    price: 3000 + 800 * Math.random(),
    type: 'sell',
  },
]

const context = createContext()

const SellProvider = ({ children }) => {
  const [state, setState] = useState(initialState)

  const value = useMemo(() => [state, setState], [state])

  return <context.Provider value={value}>{children}</context.Provider>
}

const useSellOrders = () => {
  const [state, setState] = useContext(context)

  const setSell = () =>
    setState(prev => [
      ...prev,
      {
        id: Math.random(),
        size: Math.random(),
        price: 3000 + 800 * Math.random(),
        type: 'sell',
      },
    ])

  return [state, setSell]
}

export { SellProvider, useSellOrders, initialState }
