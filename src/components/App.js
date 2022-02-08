import { Orders } from '~/src/components/Orders'
import { Wrapper } from './styled'

import { BuyProvider } from '~/src/store/buy'
import { SellProvider } from '~/src/store/sell'
import { Suspense } from 'react'

const App = () => (
  <SellProvider>
    <BuyProvider>
      <Wrapper>
        <Suspense fallback={<div>loading</div>}>
          <Orders />
        </Suspense>
      </Wrapper>
    </BuyProvider>
  </SellProvider>
)

export { App }
