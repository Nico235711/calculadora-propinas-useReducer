import { useState } from "react"
import { OrderItem } from "../types"

const useOrder = () => {

  const [order, setOrder] = useState<OrderItem[]>([])
  const [tip, setTip] = useState(0)


  const placeOrder = () => { 
    setOrder([])
    setTip(0)
  }

  return {
    order,
    tip,
    setTip,
    placeOrder
  }
}

export default useOrder