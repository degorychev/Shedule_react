import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])




BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
  );

export default class Calend extends Component {
    render(){
        var events = this.props.data;
        var newevents = []
        events.map((eve) =>
            newevents.push({"title": eve.title, "start" : new Date(eve.start), "end" : new Date(eve.end)})
        );
        return(
            <BigCalendar 
            events={newevents}
            views={allViews}
        //   step={60}
        //   defaultDate={new Date(2015, 3, 1)}
        />
        );  
    }
}