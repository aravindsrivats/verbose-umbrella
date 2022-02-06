import { Orders } from '~/src/components/Orders'
import { Wrapper } from './styled'

import { BuyProvider } from '~/src/store/buy'
import { SellProvider } from '~/src/store/sell'

const App = () => (
  <SellProvider>
    <BuyProvider>
      <Wrapper>
        <Orders />
      </Wrapper>
    </BuyProvider>
  </SellProvider>
)

export { App }
