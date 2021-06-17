import React from 'react';
import classnames from 'classnames';

import * as calendar from './calendar';

import './index.scss';

function Calendar(props) {
  const monthSelect = React.useRef();
  const yearSelect = React.useRef();
  const currentDate = new Date();

  const handlePrevMonthButtonClick = () => {
    props.onHandlePrevMonthButtonClick();
  };

  const handleNextMonthButtonClick = () => {
    props.onHandleNextMonthButtonClick();
  };

  const handleSelectChange = () => {
    const year = yearSelect.current.value;
    const month = monthSelect.current.value;
    props.onHandleSelectChange(year, month);
  };

  const handleDayClick = (date) => {
    props.onHandleDayClick(date);
    props.onChange(date);
  };

  const { year, month, years, monthNames, weekDayNames, selectedDate } = props;

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
