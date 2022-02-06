import { Orders } from '~/src/components/Orders'
import { Wrapper } from './styled'

import { Provider } from '~/src/store/context'
import { initial } from '~/src/store/initial'

const App = () => (
  <Provider initial={initial}>
    <Wrapper>
      <Orders />
    </Wrapper>
  </Provider>
)

export { App }
