import React from 'react';

import './Schedule.scss';

const Schedule = (props) => {
  const { scheduleHours } = props;
  return (
    <div>
      {scheduleHours.map((hour, index) => (
        <li key={`${hour}_${index}`}>{hour}</li>
      ))}
    </div>
  );
};

export default Schedule;
