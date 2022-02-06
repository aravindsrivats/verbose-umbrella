import { Item } from './styled'

import { useBuyOrders } from '~/src/store/buy'

const BuyOrders = () => {
  const [list] = useBuyOrders()

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

export { BuyOrders }
