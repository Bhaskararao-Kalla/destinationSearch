import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props

  const {name, imgUrl} = destinationDetails

  return (
    <li className="li-container">
      <img src={imgUrl} className="img" alt="DestinationImage" />
      <h1 className="heading">{name}</h1>
    </li>
  )
}

export default DestinationItem
