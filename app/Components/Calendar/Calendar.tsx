import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { SetDayModal } from '../SetDayModal/SetDayModal';
import './Calendar.scss';
import Modal from 'react-responsive-modal';

export class CalendarManager extends Component {
    getNextMonth = (date) => {
        return new Date(date.getYear(), date.getMonth() + 1);
    }

    state = {
        day: this.getNextMonth(new Date()),
        open: false
    }

    onClickDay = (day) => {
        this.setState({ day });
        this.onOpenModal();
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;
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
                <Modal open={open} onClose={this.onCloseModal} showCloseIcon={false} center>
                    <SetDayModal date={this.state.day}/>
                </Modal>
            </div>
        );
    }
}
