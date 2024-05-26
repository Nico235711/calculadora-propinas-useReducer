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
    switch (action.type) {
      case "add-item":
        const itemExists = state.order.find(orderItem => orderItem.id === action.payload.item.id);
        let updatedOrder = [];
  
        if (itemExists) { // Si el item ya existe en la orden
          updatedOrder = state.order.map(orderItem => (
            orderItem.id === action.payload.item.id ?
              { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem
          ));
        } else { // Si el item no existe en la orden
          const newItem = { ...action.payload.item, quantity: 1 };
          updatedOrder = [...state.order, newItem];
        }
  
        return {
          ...state,
          order: updatedOrder
        };
  
      case "remove-item":
        const updatedOrderRemove = state.order.filter(orderItem => orderItem.id !== action.payload.id);
  
        return {
          ...state,
          order: updatedOrderRemove
        };
  
      case "place-order":
        return {
          order: [],
          tip: 0
        };
  
      case "add-tip":
        return {
          ...state,
          tip: action.payload.value
        };
  
      default:
        return state;
    }
}