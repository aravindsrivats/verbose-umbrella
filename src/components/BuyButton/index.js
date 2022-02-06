import { Button } from './styled'

import { useOrders } from '~/src/store/orders'

const BuyButton = () => {
  const [_, setBuy] = useOrders()

  return <Button onClick={() => setBuy()}>Buy</Button>
}

export { BuyButton }
