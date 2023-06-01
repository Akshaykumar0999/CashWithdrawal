// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationsListDetails, onIncreaseCounter} = props
  const {value} = denominationsListDetails
  const onIncrease = () => {
    onIncreaseCounter(value)
  }
  return (
    <li className="li-card">
      <button className="button" type="button" onClick={onIncrease}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
