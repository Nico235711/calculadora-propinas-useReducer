import { Dispatch } from "react"
import { OrderActions } from "../reducers/order-reducer"

type TipPercentageFormProps = {
  tip: number
  dispatch: Dispatch<OrderActions>
}

const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

const TipPercentageForm = ({ tip, dispatch } : TipPercentageFormProps) => {

  return (
    <div>
      <h3 className="font-bold text-3xl">Propina</h3>
      <form>
        {
          tipOptions.map(tipOption => (
            <div key={tipOption.id} className="flex items-center gap-2 mt-1">
              <label htmlFor={tipOption.id}>{tipOption.label}</label>
              <input
                type="radio"
                name="tip"
                id={tipOption.id}
                value={tipOption.value} 
                onChange={e => dispatch({ type: "add-tip", payload: { value: +e.target.value } })}
                checked={tipOption.value === tip}
              />
            </div>
          ))
        }
      </form>
    </div>
  )
}

export default TipPercentageForm