// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {googleSearch: ''}

  searchUserInput = event => {
    this.setState({googleSearch: event.target.value})
  }

  appendSearch = suggestion => {
    this.setState({googleSearch: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {googleSearch} = this.state

    const filteredList = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(googleSearch.toLowerCase()),
    )

    return (
      <div className="google-bg-container">
        <div className="google-card">
          <img
            className="img"
            alt="google logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          />
          <div className="search-bar-container">
            <div className="search-bar-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                className="search-bar"
                placeholder="Search Google"
                type="search"
                value={googleSearch}
                onChange={this.searchUserInput}
              />
            </div>
            <ul className="search-item-container">
              {filteredList.map(eachItem => (
                <SuggestionItem
                  eachItem={eachItem}
                  appendSearch={this.appendSearch}
                  key={eachItem.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
