import { Button } from './styled'

import { useOrders } from '~/src/store/orders'

const SellButton = () => {
  const [_, __, setSell] = useOrders()

  return <Button onClick={() => setSell()}>Sell</Button>
}

export { SellButton }
