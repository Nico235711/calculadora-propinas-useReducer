import { useReducer } from "react"
import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"
import { initialState, orderReducer } from "./reducers/order-reducer"


function App() {

  const { order, removeItem, tip, setTip, placeOrder } = useOrder()
  const [state, dispatch] = useReducer(orderReducer, initialState)

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-4xl font-bold text-center">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 md:grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="mb-5 text-5xl font-bold">Menú</h2>
          {
            menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                dispatch={dispatch}
              />
            ))
          }
        </div>

        <div className="border-2 border-slate-300 rounded-md p-5 md:overflow-y-scroll md:h-screen space-y-10">
          {
            state.order.length ? (
              <>
                <OrderContents
                  order={state.order}
                  removeItem={removeItem}
                />
                
                <TipPercentageForm
                  tip={tip} 
                  setTip={setTip}
                />
                
                <OrderTotals 
                  order={state.order}
                  tip={tip}
                  placeOrder={placeOrder}
                />
              </>
              ) : (
            <p className="font-bold text-3xl text-indigo-600">La orden esta vacía</p>
            )
          }
        </div>
      </main>
    </>
  )
}

export default App
