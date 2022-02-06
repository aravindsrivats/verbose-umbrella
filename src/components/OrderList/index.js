import { Item, Wrapper } from './styled'

const OrderList = () => {
  const list = [
    {
      id: Math.random(),
      size: Math.random(),
      price: 3000 + 800 * Math.random(),
      type: 'buy',
    },
    {
      id: Math.random(),
      size: Math.random(),
      price: 3000 + 800 * Math.random(),
      type: 'sell',
    },
  ]

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
