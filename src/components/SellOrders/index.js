import { Item } from './styled'

import { useOrders } from '~/src/store/orders'

const SellOrders = () => {
  const [list] = useOrders()

  return (
    <>
      {list
        .filter(item => item.type === 'sell')
        .map(item => (
          <Item key={item.id}>
            {item.size.toFixed(2)} - <span>{item.price.toFixed(2)}</span>
          </Item>
        ))}
    </>
  )
}

export { SellOrders }
