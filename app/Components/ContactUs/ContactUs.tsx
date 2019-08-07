import * as React from 'react';
import {Mail} from "../Mail/Mail";
import {Phone} from "../Phone/Phone";

export const ContactUs = () => { return (
<div className="contactUs">
<h2>Contact Us</h2>
    <Mail/>
    <Phone/>
</div>)
};