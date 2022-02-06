import { BuyOrders } from '~/src/components/BuyOrders'
import { SellOrders } from '~/src/components/SellOrders'

import { Wrapper } from './styled'

const OrderList = () => {
  return (
    <Wrapper>
      <BuyOrders />
      <hr />
      <SellOrders />
    </Wrapper>
  )
}

export { OrderList }
