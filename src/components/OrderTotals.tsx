import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
  order: OrderItem[]
}

const OrderTotals = ({ order }: OrderTotalsProps) => {

  const subTotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-bold text-3xl">Total y Propinas</h2>
        <p className="font-bold text-2xl">SubTotal: <span className="font-normal">{formatCurrency(subTotalAmount)}</span></p>
        <p className="font-bold text-2xl">Propina: <span className="font-normal">$0</span></p>
        <p className="font-bold text-2xl">Total a Pagar: <span className="font-normal">$0</span></p>
      </div>
    </>
  )
}

export default OrderTotals