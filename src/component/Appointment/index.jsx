import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Calendar from '../Calendar/index';
import Schedule from '../Schedule/index';
import { setDateRecept, setSelectedDateRecept } from '../../redux/actions/recepts';

import './Appointment.scss';

const Appointment = () => {
  const defaultProps = {
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
    scheduleHours: ['10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'],
  };

  const dispatch = useDispatch();
  const date = useSelector(({ recept }) => recept.date);
  const selectedDate = useSelector(({ recept }) => recept.selectedDate);
  const [visibleDaySelect, setVisibleDaySelect] = React.useState(false);
  const handleDateChange = (date) => dispatch(setDateRecept(date));

  const year = date.getFullYear();

  const month = date.getMonth();

  console.log(date);
  console.log(selectedDate);

  const handlePrevMonthButtonClick = () => {
    const date = new Date(year, month - 1);
    dispatch(setDateRecept(date));
  };

  const handleNextMonthButtonClick = () => {
    const date = new Date(year, month + 1);
    dispatch(setDateRecept(date));
  };

  const handleSelectChange = (year, month) => {
    const date = new Date(year, month);
    dispatch(setDateRecept(date));
  };

  const handleDayClick = (date) => {
    dispatch(setSelectedDateRecept(date));
    setVisibleDaySelect(true);
  };

  const selectVisibleDay = () => {
    setVisibleDaySelect(false);
  };

  return (
    <div className="appointment">
      <div className="appointment__header">
        {selectedDate && <p>Выбранная дата: {selectedDate.toLocaleDateString()}</p>}
      </div>
      {!visibleDaySelect && (
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
      )}
      {visibleDaySelect && (
        <div>
          <button onClick={selectVisibleDay}>Поменять дату</button>
          <Schedule scheduleHours={defaultProps.scheduleHours} />
        </div>
      )}
    </div>
  );
};

export default Appointment;
