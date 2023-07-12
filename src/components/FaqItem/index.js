import {Component} from 'react'
import './index.css'

const plusSymbol =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusSymbol =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
class FaqItem extends Component {
  state = {isActive: false}

  answer = () => {
    const {isActive} = this.state
    const {faqsList} = this.props
    const {answerText} = faqsList
    if (isActive) {
      return (
        <div>
          <hr />
          <p className="para">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onclick = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  render() {
    const {faqsList} = this.props
    const {isActive} = this.state
    const {questionText} = faqsList
    const image = isActive ? minusSymbol : plusSymbol
    const altText = isActive ? 'minus' : 'plus'
    return (
      <li className="list">
        <div className="back">
          <div className="back1">
            <h1 className="head">{questionText}</h1>
            <button className="button" type="button" onClick={this.onclick}>
              <img src={image} alt={altText} />
            </button>
          </div>
          {this.answer()}
        </div>
      </li>
    )
  }
}

export default FaqItem
