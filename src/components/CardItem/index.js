// Write your code here.
import './index.css'

const CardItem = props => {
  const {technologyCard} = props
  const {title, description, imgUrl, className} = technologyCard
  return (
    <li className={`card ${className}`}>
      <div>
        <h1 className="heading">{title}</h1>
        <p className="description">{description}</p>
        <img src={imgUrl} className="avatar" alt={title} />
      </div>
    </li>
  )
}

export default CardItem
