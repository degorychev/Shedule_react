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
        {
            var Dstart = new Date(eve.start)
            Dstart.setHours(Dstart.getHours()-4)
            var Dend =new Date(eve.end)
            Dend.setHours(Dend.getHours()-4)
            newevents.push({"title": eve.title, "start" : Dstart, "end" : Dend})
        }
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