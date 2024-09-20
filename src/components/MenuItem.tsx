import { Dispatch } from "react"
import type { MenuItem } from "../types"
import { OrderActions } from "../reducers/order-reducer"

type MenuItemProps = {
  item: MenuItem
  dispatch: Dispatch<OrderActions>
}

const MenuItem = ({ item, dispatch }: MenuItemProps) => {

  return (
    <button
      className="border-2 border-teal-400 p-3 w-full mb-4 flex justify-between items-center hover:bg-teal-400 hover:text-white transition-all rounded-md"
      onClick={() => dispatch({ type: "add-item", payload: { item } })}
    >
      <p className="text-lg">{item.name}</p>
      <p className="font-bold">${item.price}</p>
    </button>
  )
}

export default MenuItem