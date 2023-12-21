import React from 'react';

const Dropdown = ({ selectedMonth, onSelectMonth }) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handleMonthChange = (e) => {
    onSelectMonth(e.target.value);
  };

  return (
    <div>
      <label>Select Month:</label>
      <select value={selectedMonth} onChange={handleMonthChange}>
        {months.map((month) => (
          <option key={month} value={month}>{month}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
