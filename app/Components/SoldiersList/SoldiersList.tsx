import React, { Component } from 'react';
import { DaySettingService } from '../../Services/DaySettingService';
import './SoldierList.scss';

interface IProps {

}

export class SoldierList extends Component<IProps> {
    state = {
        availableSoldiers: [] as string[],
        checkedSoldiers: [] as string[]
    }

    constructor(props: IProps) {
        super(props);

        this.state = {
            availableSoldiers: (new DaySettingService()).getAvailableSoldiers(),
            checkedSoldiers: []
        }
    }

    checkSoldier = (soldier:string) => {
        let checkedSoldiers: string[] = this.state.checkedSoldiers;

        if (this.state.checkedSoldiers.indexOf(soldier) === -1) {
            checkedSoldiers.push(soldier);
        } else {
            checkedSoldiers.splice(checkedSoldiers.indexOf(soldier), 1);
        }

        this.setState({ checkedSoldiers });
    }

    render() {
        return (
            <div>
                <h3>חיילים מסומנים: {this.state.checkedSoldiers.length}</h3>
                <ul>
                    {this.state.availableSoldiers.map(soldier => {
                        return <li><input type="checkbox" onClick={} />{soldier}</li>
                    })}
                </ul>
            </div>);
    }
}
