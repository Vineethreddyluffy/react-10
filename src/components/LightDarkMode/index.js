// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {name: 'Light Mode', card: 'card2', head: 'heading1'}

  AuthButton = () => {
    const {name} = this.state
    if (name === 'Light Mode') {
      this.setState({name: 'Dark Mode'})
      this.setState({card: 'card1'})
      this.setState({head: 'heading'})
    } else {
      this.setState({name: 'Light Mode'})
      this.setState({card: 'card2'})
      this.setState({head: 'heading1'})
    }
  }

  render() {
    const {name} = this.state
    const {card} = this.state
    const {head} = this.state
    return (
      <div className="cont">
        <div className={card}>
          <h1 className={head}>Click To Change Mode</h1>
          <button type="button" onClick={this.AuthButton} className="button">
            {name}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
