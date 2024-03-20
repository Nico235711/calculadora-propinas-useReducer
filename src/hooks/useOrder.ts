import { useState } from "react"
import { MenuItems, OrderItem } from "../types"

const useOrder = () => {

  const [order, setOrder] = useState<OrderItem[]>([])

  const addItem = (item: MenuItems) => {
    
    // no puedo agregar a order el item porque el item no tiene la propiedad
    // quantity asi que creo un nuevo item tomando una copia de las propiedades
    // del item anterior pero con la propiedad nueva 
    const newItem = { ...item, quantity: 1 } 
    setOrder([...order, newItem])
  }

  return {
    addItem
  }
}

export default useOrder