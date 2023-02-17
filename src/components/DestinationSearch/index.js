import {Component} from 'react'
import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onchangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props

    const {searchInput} = this.state

    const searchResultArray = destinationsList.filter(each =>
      each.name.toLowerCase().include(searchInput.toLowerCase()),
    )

    return (
      <div className="destination-search-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-container">
          <input
            type="search"
            className="input-box"
            placeholder="Search"
            onChange={this.onchangeSearchInput}
          />
          <img
            alt="search"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          />
        </div>
        <ul className="ul-container">
          {searchResultArray.map(eachDestination => (
            <DestinationItem
              uniqueKey={eachDestination.id}
              destinationDetails={eachDestination}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
