import { Dispatch } from "react"
import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"
import { OrderActions } from "../reducers/order-reducer"

type OrderContentsProps = {
  order: OrderItem[]
  dispatch: Dispatch<OrderActions>
}

const OrderContents = ({ order, dispatch } : OrderContentsProps) => {

  return (
    <div>
      <h2 className="text-5xl font-bold">Consumo</h2>

      <div className="mt-5 space-y-3">
        {
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
                  onClick={() => dispatch({
                    type: "remove-item", payload: { id: item.id }
                  })}
                >
                  X
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default OrderContents