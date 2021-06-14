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
  const [date, setDate] = React.useState(defaultProps.date);
  const [selectedDate, setSelectedDate] = React.useState(date);
  const handleDateChange = (date) => setDate(date);
  const year = date.getFullYear();

  const month = date.getMonth();

  const handlePrevMonthButtonClick = () => {
    const date = new Date(year, month - 1);
    setDate(date);
  };

  const handleNextMonthButtonClick = () => {
    const date = new Date(year, month + 1);
    setDate(date);
  };

  const handleSelectChange = (year, month) => {
    const date = new Date(year, month);
    setDate(date);
  };

  const handleDayClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="appointment">
      <div className="appointment__header">
        {date && <p>Выбранная дата: {selectedDate.toLocaleDateString()}</p>}
      </div>
      <Calendar
        date={date}
        years={defaultProps.years}
        monthNames={defaultProps.monthNames}
        weekDayNames={defaultProps.weekDayNames}
        year={year}
        month={month}
        selectedDate={selectedDate}
        onChange={handleDateChange}
        onHandlePrevMonthButtonClick={handlePrevMonthButtonClick}
        onHandleNextMonthButtonClick={handleNextMonthButtonClick}
        onHandleSelectChange={handleSelectChange}
        onHandleDayClick={handleDayClick}
      />
    </div>
  );
};

export default Appointment;
