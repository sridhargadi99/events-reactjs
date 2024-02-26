// Write your code here
import {Component} from 'react'
import './index.css'

const differentStates = {
  initialState: 'Initial_State',
  registerState: 'YET_TO_REGISTER',
  registeredState: 'REGISTERED',
  registrationClosedState: 'REGISTRATIONS_CLOSED',
}

class ActiveEventRegistrationDetails extends Component {
  initialContainer = () => (
    <div className="initial-container">
      <p className="initial-content-style">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  registerContainer = () => (
    <div className="register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="register-image-style"
      />
      <p className="register-content-style">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button className="register-button-style" type="button">
        Register Here
      </button>
    </div>
  )

  registeredContainer = () => (
    <div className="registered-container">
      <img
        className="registered-image-style"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1 className="registered-content-style">
        You have already registered for the event
      </h1>
    </div>
  )

  registrationClosedContainer = () => (
    <div className="registration-closed-container">
      <img
        className="registration-closed-image-style"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1 className="registration-closed-heading-style">
        Registrations Are Closed Now!
      </h1>
      <p className="registration-closed-paragraph-style">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  render() {
    const {activeStateDetails} = this.props
    console.log(activeStateDetails)
    switch (activeStateDetails) {
      case differentStates.initialState:
        return this.initialContainer()
      case differentStates.registerState:
        return this.registerContainer()
      case differentStates.registeredState:
        return this.registeredContainer()
      case differentStates.registrationClosedState:
        return this.registrationClosedContainer()
      default:
        return null
    }
  }
}

export default ActiveEventRegistrationDetails
