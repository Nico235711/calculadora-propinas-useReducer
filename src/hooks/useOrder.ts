import { useState } from "react"
import { OrderItem } from "../types"

const useOrder = () => {

  const [order, setOrder] = useState<OrderItem[]>([])
  const [tip, setTip] = useState(0)

  const removeItem = (id: OrderItem["id"]) => {

    const updatedOrder = order.filter(orderItem => orderItem.id !== id)
    setOrder(updatedOrder)
  }

  const placeOrder = () => { 
    setOrder([])
    setTip(0)
  }

  return {
    order,
    tip,
    setTip,
    removeItem,
    placeOrder
  }
}

export default useOrder