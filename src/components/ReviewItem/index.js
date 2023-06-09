import './index.css'

const ReviewItem = props => {
  const {itemDetails} = props
  const {imgUrl, username, companyName, description} = itemDetails
  return (
    <li>
      <img alt={username} src={imgUrl} />
      <p className="para">{username}</p>
      <p className="para1">{companyName}</p>
      <p className="para1">{description}</p>
    </li>
  )
}

export default ReviewItem
