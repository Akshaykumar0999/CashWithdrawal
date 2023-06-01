// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {count: 2000}

  onIncreaseCounter = value => {
    this.setState(prevState => ({count: prevState.count - value}))
  }

  render() {
    const name = 'Sara Williams'
    const initial = name.slice(0, 1)
    const {count} = this.state
    const {denominationsList} = this.props
    return (
      <div className="app-container">
        <div className="cash-withdrawal-card">
          <div className="card-1">
            <p className="s-des">{initial}</p>
            <h1 className="name-sara">{name}</h1>
          </div>
          <div className="card-2">
            <p className="your-bal">Your Balance</p>
            <div className="card-3">
              <p className="counter-numbers">{count}</p>
              <p className="in-rupees">In Rupees</p>
            </div>
          </div>
          <div className="card-4">
            <p className="withdraw">Withdraw</p>
            <p className="your-bal">CHOOSE SUM (IN RUPEES)</p>
            <ul className="ul-card">
              {denominationsList.map(each => (
                <DenominationItem
                  denominationsListDetails={each}
                  key={each.id}
                  onIncreaseCounter={this.onIncreaseCounter}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
