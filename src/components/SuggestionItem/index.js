// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachItem, appendSearch} = props
  const {suggestion} = eachItem

  const suggestSearch = () => {
    appendSearch(suggestion)
  }
  return (
    <li className="suggestion-card">
      <p className="suggestion">{suggestion}</p>
      <button type="button" className="arrow-btn" onClick={suggestSearch}>
        <img
          className="arrow-img"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
