import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { SetDayModal } from '../SetDayModal/SetDayModal';
import './Calendar.scss';
import Modal from 'react-responsive-modal';
import {DaySettingService} from '../../Services/DaySettingService';

export class CalendarManager extends Component {
    getNextMonth = (date) => {
        return new Date(date.getYear(), date.getMonth() + 1);
    }

    state = {
        day: this.getNextMonth(new Date()),
        open: false,
        setDays: (new DaySettingService).getAllSetDays(),
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

    onSubmitDay = () => {
        this.onCloseModal();
    }

    render() {
        const { open } = this.state;
        console.log(this.state.setDays);          
        return (
            <div>
                <Calendar
                    onClickDay={this.onClickDay}
                    value={this.state.day}
                    calendarType="Hebrew"
                    locale="he-IL-u-ca-hebrew-tz-jeruslm"
                    tileClassName= {({ date }) => this.state.setDays.indexOf(date) === -1 ? 'tile' : 'tile set'}
                    className="calendar"
                />
                <Modal open={open} onClose={this.onCloseModal} center>
                    <SetDayModal date={this.state.day} onSetDay={this.onSubmitDay}/>
                </Modal>
            </div>
        );
    }
}
