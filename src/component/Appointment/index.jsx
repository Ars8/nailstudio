import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setDateRecept } from '../../redux/actions/recepts';

import './Appointment.scss';

const Appointment = () => {
  const { date } = useSelector(({ recept }) => recept);
  console.log(date);
  const dispatch = useDispatch();

  const newDateElement = React.useRef();

  const onAddDate = () => {
    let text = newDateElement.current.value;
    dispatch(setDateRecept(text));
  };
  return (
    <div>
      <div>{date}</div>
      <input type="date" ref={newDateElement}></input>
      <button onClick={onAddDate}>Add Date</button>
    </div>
  );
};

export default Appointment;
