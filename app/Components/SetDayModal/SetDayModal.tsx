import React from 'react';
import './SetDayModal.scss';
interface IProps {
    date: Date;
}
export class SetDayModal extends React.Component<IProps> {
    state = {
        title: ""
    }

    constructor(props: IProps) {
        super(props);

        this.state = {
            title: this.getTitle()
        }
    }
    getDay = (date) => {
        let day = date.getDay() + 1;

        switch (day) {
            case 1:
                return "ראשון";
            case 2:
                return "שני";
            case 3:
                return "שלישי";
            case 4:
                return "רביעי";
            case 5:
                return "חמישי";
            default:
                return "סופש";
        }
    };

    getTitle = () => {
        let date = this.props.date;
        let day = this.getDay(date);

        const options = {
            month: 'numeric',
            day: 'numeric'
        }

        if (day !== "סופש") {

            let title = "שבץ את יום ";

            title += this.getDay(date);
            title += " ה ";

            title += new Intl.DateTimeFormat('en-GB', options).format(date);

            return title;
        } else {
            let nextDay = new Date(date);
            nextDay.setDate(date.getDate() + 1);
            let title = "שבץ את הסופש ";
            title += new Intl.DateTimeFormat('en-GB', options).format(date) + " - ";
            title += new Intl.DateTimeFormat('en-GB', options).format(nextDay);

            return title;
        }
    };

    render() {
        return (
            <div className="modal">
                <h2>{this.state.title}</h2>
            </div>
        );
    }
}