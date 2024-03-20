import { MenuItems } from "../types"

type MenuItemProps = {
  item: MenuItems
}

const MenuItem = ({ item } : MenuItemProps) => {

  return (
    <button
      className="border-2 border-teal-400 p-3 w-full mb-4 flex justify-between items-center hover:bg-teal-400 hover:text-white transition-all"
    >
      <p className="text-lg">{item.name}</p>
      <p className="font-bold">${item.price}</p>
    </button>
  )
}

export default MenuItem