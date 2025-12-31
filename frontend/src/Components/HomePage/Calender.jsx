import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/HomePageStyles/calander.css';


const DynamicCalendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    
    const today = new Date();

    const specialDays = {
        '2025-08-03': 'holiday',
        '2025-08-10': 'holiday',
        '2025-08-17': 'holiday',
        '2025-08-24': 'holiday',
        '2025-08-31': 'holiday',
        '2025-08-15': 'holiday',
        '2025-08-16': 'holiday',
        '2025-08-27': 'holiday',
    };

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const renderCalendar = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const dayCells = [];

        for (let i = 0; i < firstDayOfMonth; i++) {
            dayCells.push(<div key={`empty-${i}`} className="empty-cell"></div>);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            
            const isToday = 
                today.getDate() === day &&
                today.getMonth() === month &&
                today.getFullYear() === year;

            let dayClass = 'day-cell';
            if (isToday) dayClass += ' today';
            if (specialDays[dateString] === 'holiday') dayClass += ' holiday';
            else if (specialDays[dateString] === 'partial') dayClass += ' partial-day';

            dayCells.push(
                <div key={day} className={dayClass}>
                    {day}
                </div>
            );
        }
        return dayCells;
    };

    const monthYearTitle = currentDate.toLocaleString('default', {
        month: 'long',
        year: 'numeric',
    }).toUpperCase();

    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    return (
        <div className="dynamic-calendar-wrapper">
            <div className="calendar-header">
                <button onClick={handlePrevMonth} className="nav-arrow">&lt;</button>
                <h2>{monthYearTitle}</h2>
                <button onClick={handleNextMonth} className="nav-arrow">&gt;</button>
            </div>
            <div className="calendar-grid">
                {daysOfWeek.map(day => <div key={day} className="day-name">{day}</div>)}
                {renderCalendar()}
            </div>
            <div className="calendar-legend">
                <div className="legend-item">
                    <div className="legend-color holiday-color"></div>
                    <span>Holidays</span>
                </div>
                <div className="legend-item">
                    <div className="legend-color partial-color"></div>
                    <span>Partial Court Working Days</span>
                </div>
            </div>
        </div>
    );
};



const CalendarPage = () => {
  return (
    <>
        <div className="calendar-container">
            <div className="calendar-midcontainer">
                <div className="calendar-left">
                    <div className="calendar-buttons">
                        <NavLink to='#' className='calendar-buttons-details more-details'>Press Release</NavLink>
                        <NavLink to='#' className='calendar-buttons-details'>Tenders</NavLink>
                        <NavLink to='#' className='calendar-buttons-details'>Recruitments</NavLink>
                    </div>
                    <div className="calendar-left-img">
                        <img src="/calander-points.png" alt="points" />
                    </div>
                </div>
                <div className="calendar-right">
                    {/* The dynamic calendar component is rendered here */}
                    <DynamicCalendar />
                </div>
            </div>
        </div>
    </>
  )
}

export default CalendarPage;
