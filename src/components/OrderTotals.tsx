import { Dispatch, useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"
import { OrderActions } from "../reducers/order-reducer"

type OrderTotalsProps = {
  order: OrderItem[]
  tip: number
  dispatch: Dispatch<OrderActions>
}

const OrderTotals = ({ order, tip, dispatch }: OrderTotalsProps) => {

  const subTotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

  const tipAmount = useMemo(() => subTotalAmount * tip, [tip, order])
  const totalAmount = useMemo(() => subTotalAmount + tipAmount, [tip, order])

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-bold text-3xl">Total y Propinas</h2>
        <p className="font-bold text-2xl">SubTotal: <span className="font-normal">{formatCurrency(subTotalAmount)}</span></p>
        <p className="font-bold text-2xl">Propina: <span className="font-normal">{formatCurrency(tipAmount)}</span></p>
        <p className="font-bold text-2xl">Total a Pagar: <span className="font-normal">{formatCurrency(totalAmount)}</span></p>
      </div>

      <button 
        className="bg-black w-full py-3 text-white text-lg uppercase font-bold disabled:opacity-10"
        disabled={totalAmount === 0}
        onClick={() => dispatch({ type: "place-order" })}
      >
        Guardar Orden
      </button>
    </>
  )
}

export default OrderTotals