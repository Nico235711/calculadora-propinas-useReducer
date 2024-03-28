import { MenuItem } from "../types"

type MenuItemProps = {
  item: MenuItem
  addItem: (item: MenuItem) => void
}

const MenuItem = ({ item, addItem } : MenuItemProps) => {

  return (
    <button
      className="border-2 border-teal-400 p-3 w-full mb-4 flex justify-between items-center hover:bg-teal-400 hover:text-white transition-all rounded-md"
      onClick={() => addItem(item)}
    >
      <p className="text-lg">{item.name}</p>
      <p className="font-bold">${item.price}</p>
    </button>
  )
}

export default MenuItem