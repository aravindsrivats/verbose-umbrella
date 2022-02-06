import { BuyButton } from '~/src/components/BuyButton'
import { SellButton } from '~/src/components/SellButton'
import { OrderList } from '~/src/components/OrderList'
import { ButtonContainer } from './styled'

const Orders = () => {
  return (
    <>
      <ButtonContainer>
        <BuyButton />
        <SellButton />
      </ButtonContainer>
      <OrderList />
    </>
  )
}

export { Orders }
