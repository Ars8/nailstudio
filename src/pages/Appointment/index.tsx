import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Calendar from '../../component/Calendar/index';
import Schedule from '../../component/Schedule/index';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import Input from '../../shared/components/FormElements/Input';
import { fetchRecepts } from '../../store/ducks/recepts/actionCreators';
import { setDate, setSelectedDate, setSelectedHour } from '../../store/ducks/recepts/selectors';

import './Appointment.scss';

const Appointment = (): React.ReactElement => {
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
  const date = useSelector(setDate);
  const selectedDate = useSelector(setSelectedDate);
  const selectedHour = useSelector(setSelectedHour);
  const [visibleDaySelect, setVisibleDaySelect] = React.useState(false);
  const [showMap, setShowMap] = React.useState(false);
  const handleDateChange = (date: any) => dispatch(addRecept(date));
  /* const handleHourChange = (date) => dispatch(setSelectedHourRecept(hour)); */

  const year: number = date.getFullYear();

  const month: number = date.getMonth();

  const selectDate = date.toLocaleDateString();

  const handlePrevMonthButtonClick = () => {
    const date = new Date(year, month - 1);
    handleDateChange(date);
  };

  const handleNextMonthButtonClick = () => {
    const date = new Date(year, month + 1);
    handleDateChange(date);
  };

  const handleSelectChange = (year: number, month: number) => {
    const date = new Date(year, month);
    handleDateChange(date);
  };

  const handleDayClick = (date: number) => {
    dispatch(handleDateChange(date));
    setVisibleDaySelect(true);
  };

  const selectVisibleDay = () => {
    setVisibleDaySelect(false);
  };

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  const selectHour = (/* hour */) => {
    /* handleHourChange(hour); */
    openMapHandler();
  }; 
  
  const modalHeaderMessage = `Оставьте свой номер телефона чобы мы могли связаться с Вами`;

  React.useEffect(() => {
    dispatch(fetchRecepts())
  });

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
      <div>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={modalHeaderMessage}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        {console.log(selectedDate)}
        {console.log(selectedHour)}
        <div className="map-container">
          <div>Выбранная дата : {selectDate}</div>
          <div>Выбранное время : {selectedHour}</div>
         <form className="place-form">
           <Input element="input" type="text" lable="Title"/>
         </form>
        </div>
      </Modal>
    </div>
    </div>
  );
};

export default Appointment;
