import { MenuItem, OrderItem } from "../types"

// acciones quee describen que esta pasando en la app
export type OrderActions = 
  { type: "add-item", payload: { item: MenuItem } } |
  { type: "remove-item", payload: { id: MenuItem["id"] } } |
  { type: "place-order" } |
  { type: "add-tip", payload: { value: number } }

export type OrderState = {
  order: OrderItem[]
  tip: number
}

// state inicial
export const initialState : OrderState = {
  order: [],
  tip: 0
}

// reducer
export const orderReducer = (
    state: OrderState = initialState,
    action: OrderActions
  ) => {
    if (action.type === "add-item") {
      const itemExists = state.order.find(orderItem => orderItem.id === action.payload.item.id)
      let updatedOrder : OrderItem[] = []

    if (itemExists) { // si existe en mi orden
      updatedOrder = state.order.map(orderItem => (
        orderItem.id === action.payload.item.id ?
          { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem
      ))

    } else { // no existe en mi orden
      // no puedo agregar a order el item porque el item no tiene la propiedad
      // quantity asi que creo un nuevo item tomando una copia de las propiedades
      // del item anterior pero con la propiedad nueva
      const newItem : OrderItem = { ...action.payload.item, quantity: 1 }
      updatedOrder = [...state.order, newItem]
    }
      return {
        ...state,
        order: updatedOrder
      }
    }

    if (action.type === "remove-item") {
      const updatedOrder = state.order.filter(orderItem => orderItem.id !== action.payload.id)

      return {
        ...state,
        order: updatedOrder
      }
    }

    if (action.type === "place-order") {
      
      return {
        ...state,
      }
    }

    if (action.type === "add-tip") {

      return {
        ...state,
      }
    }

    return state
}