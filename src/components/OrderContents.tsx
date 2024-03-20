import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"

type OrderContentsProps = {
  order: OrderItem[]
  removeItem: (id: OrderItem["id"]) => void
}

const OrderContents = ({ order, removeItem } : OrderContentsProps) => {

  return (
    <div>
      <h2 className="text-5xl font-bold">Consumo</h2>

      <div className="mt-5 space-y-3">
        {
          order.length ? (
            order.map( item => (
              <div
                key={item.id}
                className="border-2 rounded-md p-5 space-y-3 flex lg:justify-between items-end"
              >
                <div>
                  <p className="font-bold text-xl">Orden: <span className="font-normal">{item.name} - {formatCurrency(item.price)}</span></p>
                  <p className="font-bold text-xl">Cantidad: <span className="font-normal">{item.quantity}</span></p>
                  <p className="font-bold text-xl">Precio: <span className="font-normal">{formatCurrency(item.price * item.quantity)}</span></p>
                </div>

                <div>
                  <button
                    type="button"
                    className="bg-red-600 rounded-full h-8 w-8 text-white font-black"
                    onClick={() => removeItem(item.id)}
                  >
                    X
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="font-bold text-3xl text-indigo-600">La orden esta vacía</p>
          )
        }
      </div>
    </div>
  )
}

export default OrderContents