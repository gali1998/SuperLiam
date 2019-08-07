import {SetDay} from '../Models/SetDay';

export class DaySettingService {
    public getAllSetDays(): Date[] {
        let day1: Date = new Date();
        let day2: Date = new Date(day1.getDate() + 6);

        return [day1, day2];
    }

    public saveDay(date: Date, setDay: SetDay): void {
        console.log(date, setDay);
    }

    public getAvailableSoldiers(): string[] {
        return ["יוסי", "בני"];
    }
}