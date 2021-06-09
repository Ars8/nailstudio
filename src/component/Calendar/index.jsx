import React from 'react';
import classnames from 'classnames';

import * as calendar from './calendar';

import './index.scss';

function Calendar(props) {
  const [date, setDate] = React.useState(props.date);
  const [selectedDate, setSelectedDate] = React.useState(null);
  const monthSelect = React.useRef();
  const yearSelect = React.useRef();
  const currentDate = new Date();

  const yeary = () => {
    return date.getFullYear();
  };

  const monthy = () => {
    return date.getMonth();
  };
  const month = monthy();
  const year = yeary();
  console.log(month);
  console.log(year);

  const handlePrevMonthButtonClick = () => {
    const date = new Date(year, month - 1);

    setDate({ date });
  };

  const handleNextMonthButtonClick = () => {
    const date = new Date(year, month + 1);

    setDate({ date });
  };

  const handleSelectChange = () => {
    const year = yearSelect.current.value;
    const month = monthSelect.current.value;

    const date = new Date(year, month);

    setDate({ date });
  };

  const handleDayClick = (date) => {
    setSelectedDate({ selectedDate: date });

    props.onChange(date);
  };

  const { years, monthNames, weekDayNames } = props;

  const monthData = calendar.getMonthData(year, month);

  return (
    <div className="calendar">
      <header>
        <button onClick={handlePrevMonthButtonClick}>{'<'}</button>

        <select ref={monthSelect} value={month} onChange={handleSelectChange}>
          {monthNames.map((name, index) => (
            <option key={name} value={index}>
              {name}
            </option>
          ))}
        </select>

        <select ref={yearSelect} value={year} onChange={handleSelectChange}>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <button onClick={handleNextMonthButtonClick}>{'>'}</button>
      </header>

      <table>
        <thead>
          <tr>
            {weekDayNames.map((name) => (
              <th key={name}>{name}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {monthData.map((week, index) => (
            <tr key={index} className="week">
              {week.map((date, index) =>
                date ? (
                  <td
                    key={index}
                    className={classnames('day', {
                      today: calendar.areEqual(date, currentDate),
                      selected: calendar.areEqual(date, selectedDate),
                    })}
                    onClick={() => handleDayClick(date)}>
                    {date.getDate()}
                  </td>
                ) : (
                  <td key={index} />
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;
