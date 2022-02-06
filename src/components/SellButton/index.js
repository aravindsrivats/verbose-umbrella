import { Button } from './styled'

import { useSellOrders } from '~/src/store/sell'

const SellButton = () => {
  const [_, setSell] = useSellOrders()

  return <Button onClick={() => setSell()}>Sell</Button>
}

export { SellButton }
