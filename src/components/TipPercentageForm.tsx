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

const TipPercentageForm = () => {

  return (
    <div>
      <h3 className="font-bold text-3xl">Propina</h3>
      <form>
        {
          tipOptions.map(tip => (
            <div key={tip.id} className="flex items-center gap-2 mt-1">
              <label htmlFor={tip.id}>{tip.label}</label>
              <input
                type="radio"
                name="tip"
                id={tip.id}
                value={tip.value} 
              />
            </div>
          ))
        }
      </form>
    </div>
  )
}

export default TipPercentageForm