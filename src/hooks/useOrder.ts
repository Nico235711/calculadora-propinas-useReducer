import { useState } from "react"
import { OrderItem } from "../types"

const useOrder = () => {

  const [order, setOrder] = useState<OrderItem[]>([])

  return {

  }
}

export default useOrder