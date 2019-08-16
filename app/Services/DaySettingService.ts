import {SetDay} from '../Models/SetDay';
import axios, { AxiosPromise, AxiosResponse } from 'axios';

export class DaySettingService {
    public getAllSetDays(): Date[] {
        let day1: Date = new Date();
        let day2: Date = new Date(day1.getDate() + 6);

        return [day1, day2];
    }

    public saveDay(date: Date, setDay: SetDay): Promise<void> {
        let formattedDate = date.getMonth() + "-" + date.getDate() + "-" + (date.getFullYear()+ 1900);
        let params = {
            guard1: setDay.guards[0],
            guard2: setDay.guards[1],
            guard3: setDay.guards[2],
            guard4: setDay.guards[3],
            guard5: setDay.guards[4],
        };
        return axios.post('http://localhost:3001/rosters/' + formattedDate + "/setManning", params).then(() => {
            alert("success");
        }).catch(() => {
            alert("failed");
        });
    }

    public getGuards(date:Date): Promise<AxiosPromise<string[]> | string[]>  {
        let formattedDate = date.getMonth() + "-" + date.getDate() + "-" + (date.getFullYear()+ 1900);
        
        return axios.get('http://localhost:3001/rosters/' + formattedDate).then((response : AxiosResponse<any>) => {
            let soldiers: string[] = [];
            if ((response as any).data.guard1) {
                soldiers.push((response as any).data.guard1);
            }

            if ((response as any).data.guard2) {
                soldiers.push((response as any).data.guard2);
            }

            if ((response as any).data.guard3) {
                soldiers.push((response as any).data.guard3);
            }

            if ((response as any).data.guard4) {
                soldiers.push((response as any).data.guard4);
            }

            if ((response as any).data.guard5) {
                soldiers.push((response as any).data.guard5);
            }
            
            return soldiers;
       });
    }

    public getAvailableSoldiers(date: Date): Promise<AxiosPromise<string[]> | string[]>  {
        let formattedDate = date.getMonth() + "-" + date.getDate() + "-" + (date.getFullYear()+ 1900);
        
        return axios.get('http://localhost:3001/rosters/' + formattedDate).then((response : AxiosResponse<any>) => {
            let soldiers: string[] = [];
            (response as any).data.options.forEach(element => {
                soldiers.push(element.firstName + " " + element.lastName);
            });

            return soldiers;
       });
    }
}