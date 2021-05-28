import React from 'react';

import './Appointment.scss';

class Appointment extends React.Component {
  newDateElement = React.createRef();

  onAddDate = () => {
    let text = this.newDateElement.current.value;
    console.log(text);
  };

  render() {
    return (
      <div>
        <input type="date" ref={this.newDateElement}></input>
        <button onClick={this.onAddDate}>Add Date</button>
      </div>
    );
  }
}

export default Appointment;
