import { useStore } from './context'

const useOrders = () => {
  const [state, setState] = useStore()

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

  return [state, setBuy, setSell]
}

export { useOrders }
