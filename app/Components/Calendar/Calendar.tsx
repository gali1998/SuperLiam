import React, { Component } from 'react';
import Calendar from 'react-calendar';
import './Calendar.scss'; 

export class CalendarManager extends Component {
  getNextMonth = (date) => {
    return new Date(date.getYear(), date.getMonth() + 1);
  }

  state = {
    day: this.getNextMonth(new Date())
  }

  onClickDay = (day) =>  {
      this.setState({ day });
      alert("key pressed");
    }

  render() {
    return (
      <div>
        <Calendar
          onClickDay={this.onClickDay}
          value={this.state.day}
          calendarType="Hebrew"
          locale="he-IL-u-ca-hebrew-tz-jeruslm"
          tileClassName="tile"
          className="calendar"
        />
      </div>
    );
  }
}