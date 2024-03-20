import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"


function App() {

  const { order, addItem } = useOrder()

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
                addItem={addItem}
              />
            ))
          }
        </div>

        <div className="border-2 border-slate-300 rounded-md p-5 md:overflow-y-scroll md:h-screen space-y-10">
          <OrderContents 
            order={order}
          />
        </div>
      </main>
    </>
  )
}

export default App
