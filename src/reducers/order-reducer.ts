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

      return {
        ...state
      }
    }

    if (action.type === "remove-item") {

      return {
        ...state
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