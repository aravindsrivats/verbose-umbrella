import { Button } from './styled'

import { useBuyOrders } from '~/src/store/buy'

const BuyButton = () => {
  const [_, setBuy] = useBuyOrders()

  return <Button onClick={() => setBuy()}>Buy</Button>
}

export { BuyButton }
