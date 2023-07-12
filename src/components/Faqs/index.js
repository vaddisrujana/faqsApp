import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="background">
        <div className="background1">
          <h1 className="heading">FAQs</h1>
          <ul>
            {faqsList.map(each => (
              <FaqItem faqsList={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
