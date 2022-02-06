import { Item, Wrapper } from './styled'

import { useStore } from '~/src/store/context'

const OrderList = () => {
  const [list] = useStore()

  return (
    <Wrapper>
      {list
        .filter(item => item.type === 'buy')
        .map(item => (
          <Item key={item.id}>
            {item.size.toFixed(2)} - {item.price.toFixed(2)}
          </Item>
        ))}
      <hr />
      {list
        .filter(item => item.type === 'sell')
        .map(item => (
          <Item key={item.id}>
            {item.size.toFixed(2)} - {item.price.toFixed(2)}
          </Item>
        ))}
    </Wrapper>
  )
}

export { OrderList }
