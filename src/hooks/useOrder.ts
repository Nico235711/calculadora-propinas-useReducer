import { useState } from "react"
import { MenuItems, OrderItem } from "../types"

const useOrder = () => {

  const [order, setOrder] = useState<OrderItem[]>([])

  const addItem = (item: MenuItems) => {  
    console.log(item);
    
  }

  return {
    addItem
  }
}

export default useOrder