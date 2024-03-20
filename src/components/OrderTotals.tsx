import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
  order: OrderItem[]
  tip: number
  placeOrder: () => void
}

const OrderTotals = ({ order, tip, placeOrder }: OrderTotalsProps) => {

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
        onClick={placeOrder}
      >
        Guardar Orden
      </button>
    </>
  )
}

export default OrderTotals