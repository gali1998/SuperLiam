import React, {Component} from 'react';
import { DaySettingService } from '../../Services/DaySettingService';
import './SoldierList.scss';
import { SetDay } from '../../Models/SetDay';

interface IProps {
    onSetDay: Function,
    date: Date
}

export class SoldierList extends Component<IProps> {
    state = {
        availableSoldiers: [] as string[],
        checkedSoldiers: [] as string[]
    }

    constructor(props: IProps) {
        super(props);

        this.state = {
            availableSoldiers: [],
            checkedSoldiers: []
        }
    }

    componentDidMount() {
        // tslint:disable-next-line: new-parens
        (new DaySettingService).getAvailableSoldiers(this.props.date).then((soldiers) => {
            this.setState({ availableSoldiers: soldiers });
        });

        (new DaySettingService).getGuards(this.props.date).then((soldiers) => {
            this.setState({ checkedSoldiers: soldiers });
        });
    }

    insertSoldier = (index, id) => {
        let soldier: any = document.getElementById(id);

        if (soldier) {
            soldier = soldier.value;
        }
        let checkedSoldiers = this.state.checkedSoldiers;
        checkedSoldiers[index -1] = soldier;

        this.setState({checkedSoldiers});
        console.log(this.state.checkedSoldiers);
    }

    validate = () => {
        if(this.state.checkedSoldiers.length < 5) {
            return false;
        }

        for (let index = 0; index < 5; index++){
            let currentSoldier = this.state.checkedSoldiers[index];
            let soldiers: string | undefined = this.state.checkedSoldiers.find(soldier => soldier === this.state.checkedSoldiers[index]);
            if (!soldiers || soldiers.length > 1 || !currentSoldier || currentSoldier === "" || currentSoldier === "בחר חייל") {
                return false;
            }
        }

        return true;
    }

    save = () => {
        if (this.validate){
            (new DaySettingService()).saveDay(this.props.date, new SetDay(this.state.checkedSoldiers)).then(() => {});
            this.props.onSetDay();
        } else {
            alert("error");
        }
    };

    render() {
        return (
            <div>
                <div>
                    <p><label> שומר 1</label>
                        <select id="select1" onChange={() => this.insertSoldier(1, "select1")}>
                            <option disabled selected value=""> בחר חייל</option>
                            {this.state.availableSoldiers.map(soldier => {
                                return <option value={soldier}>{soldier}</option>
                            })}
                        </select>
                    </p>
                </div>

                <div>
                    <p><label> שומר 2</label>
                    <select id="select2" onChange={() => this.insertSoldier(2, "select2")}>
                            <option disabled selected value=""> בחר חייל</option>
                            {this.state.availableSoldiers.map(soldier => {
                                return <option value={soldier}>{soldier}</option>
                            })}
                        </select>
                    </p>
                </div>

                <div>
                    <p><label> שומר 3</label>
                    <select id="select3" onChange={() => this.insertSoldier(3, "select3")}>
                        <option disabled selected value=""> בחר חייל</option>
                            {this.state.availableSoldiers.map(soldier => {
                                return <option value={soldier}>{soldier}</option>
                            })}
                        </select>
                    </p>
                </div>

                <div>
                    <p><label> שומר 4</label>
                    <select id="select4" onChange={() => this.insertSoldier(4, "select4")}>
                            <option disabled selected value=""> בחר חייל</option>
                            {this.state.availableSoldiers.map(soldier => {
                                return <option value={soldier}>{soldier}</option>
                            })}
                        </select>
                    </p>
                </div>

                <div>
                    <p><label> שומר יום</label>
                    <select id="select5" className="day" onChange={() => this.insertSoldier(5, "select5")}>
                            <option disabled selected value=""> בחר חייל</option>
                            {this.state.availableSoldiers.map(soldier => {
                                return <option value={soldier}>{soldier}</option>
                            })}
                        </select>
                    </p>
                </div>

                <button className="save" onClick={() => {this.save()}}>שמור</button>
            </div>);
    }
}
