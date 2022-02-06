import { Item } from './styled'

import { useSellOrders } from '~/src/store/sell'

const SellOrders = () => {
  const [list] = useSellOrders()

  return (
    <>
      {list.map(item => (
        <Item key={item.id}>
          {item.size.toFixed(2)} - <span>{item.price.toFixed(2)}</span>
        </Item>
      ))}
    </>
  )
}

export { SellOrders }
