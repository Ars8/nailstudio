import React from 'react';

import './Schedule.scss';

const Schedule = (props) => {
  const { scheduleHours, onSelectHour } = props;

  const selectHour = (hour) => {
    onSelectHour(hour);
  };

  return (
    <div className="scheduleHours">
      {scheduleHours.map((hour, index) => (
        <li key={`${hour}_${index}`} onClick={() => selectHour(hour)}>
          {hour}
        </li>
      ))}
    </div>
  );
};

export default Schedule;
