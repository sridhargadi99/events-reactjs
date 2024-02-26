// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, stateUpdate} = props
  const {imageUrl, name, location, registrationStatus} = eventDetails
  const updateStateDetails = () => {
    stateUpdate(registrationStatus)
  }

  return (
    <li className="event-item-style">
      <button
        type="button"
        className="event-item-button-style"
        onClick={updateStateDetails}
      >
        <img src={imageUrl} alt="event" className="event-item-image-style" />
      </button>
      <p className="event-item-name-style">{name}</p>
      <p className="event-item-location-style">{location}</p>
    </li>
  )
}

export default EventItem
