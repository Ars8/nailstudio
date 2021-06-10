import React from 'react';

import Calendar from '../Calendar/index';

import './Appointment.scss';

const Appointment = () => {
  const defaultProps = {
    date: new Date(),
    years: [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030],
    monthNames: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ],
    weekDayNames: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
  };
  const [date, setDate] = React.useState(null);
  const handleDateChange = (date) => setDate(date);

  return (
    <div>
      {console.log(date)}
      {date && <p>Выбранная дата: {date.toLocaleDateString()}</p>}
      <Calendar
        date={defaultProps.date}
        years={defaultProps.years}
        monthNames={defaultProps.monthNames}
        weekDayNames={defaultProps.weekDayNames}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default Appointment;
