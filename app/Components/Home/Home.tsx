import * as React from 'react';
import {CalendarManager} from '../Calendar/Calendar';
import './Home.scss';

export const Home = () => { return (
<div>
<h2 className="title">שיבוץ תורנויות</h2>
    <CalendarManager/>
</div>)
};