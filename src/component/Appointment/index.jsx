import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Calendar from '../Calendar/index';
import Schedule from '../Schedule/index';
import {
  setDateRecept,
  setSelectedDateRecept,
  setSelectedHourRecept,
} from '../../redux/actions/recepts';

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
  const selectedHour = useSelector(({ recept }) => recept.selectedHour);
  const [visibleDaySelect, setVisibleDaySelect] = React.useState(false);
  const handleDateChange = (date) => dispatch(setDateRecept(date));

  const year = date.getFullYear();

  const month = date.getMonth();

  console.log(date);
  console.log(selectedDate);
  console.log(selectedHour);

  const handlePrevMonthButtonClick = () => {
    const date = new Date(year, month - 1);
    handleDateChange(date);
  };

  const handleNextMonthButtonClick = () => {
    const date = new Date(year, month + 1);
    handleDateChange(date);
  };

  const handleSelectChange = (year, month) => {
    const date = new Date(year, month);
    handleDateChange(date);
  };

  const handleDayClick = (date) => {
    dispatch(setSelectedDateRecept(date));
    setVisibleDaySelect(true);
  };

  const selectVisibleDay = () => {
    setVisibleDaySelect(false);
  };

  const selectHour = (hour) => {
    dispatch(setSelectedHourRecept(hour));
  };

  return (
    <div className="appointment">
      <div className="appointment__header">
        {visibleDaySelect && <button onClick={selectVisibleDay}>Поменять дату</button>}
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
          <Schedule scheduleHours={defaultProps.scheduleHours} onSelectHour={selectHour} />
        </div>
      )}
    </div>
  );
};

export default Appointment;
