// Write your code here
import {Component} from 'react'
import ReviewItem from '../ReviewItem'
import './index.css'

const reviewsList = [
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/wade-warren-img.png',
    username: 'Wade Warren',
    companyName: 'Rang',
    description:
      'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png',
    username: 'Adrian Williams',
    companyName: 'WheelO',
    description:
      'Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png',
    username: 'Sherry Johnson',
    companyName: 'MedX',
    description:
      'I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png',
    username: 'Ronald Jones',
    companyName: 'Infinos Tech',
    description:
      'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
  },
]

class ReviewsCarousel extends Component {
  state = {count: 0}

  onIncrement = () =>
    this.setState(i => ({
      count: i.count < reviewsList.length - 1 ? i.count + 1 : 0,
    }))

  onDecrement = () =>
    this.setState(i => ({
      count: i.count > 0 ? i.count - 1 : reviewsList.length - 1,
    }))

  render() {
    const {count} = this.state
    console.log(count)
    const item = reviewsList[count]
    return (
      <div className="cont">
        <h1>Reviews</h1>
        <div className="reviewCont">
          <button
            className="btn"
            onClick={count === 0 ? null : this.onDecrement}
            type="button"
            data-testid="leftArrow"
          >
            <img
              alt="left arrow"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            />
          </button>

          <ul type="none">
            <ReviewItem itemDetails={item} />
          </ul>
          <button
            className="btn"
            onClick={this.onIncrement}
            type="button"
            data-testid="rightArrow"
          >
            <img
              alt="right arrow"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
