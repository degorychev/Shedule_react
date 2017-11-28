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
            Dstart.setHours(Dstart.getHours())
            var Dend =new Date(eve.end)
            Dend.setHours(Dend.getHours())
            newevents.push({"title": eve.title, "start" : Dstart, "end" : Dend})
        }
        );
        return(
            <BigCalendar 
            defaultView='week'
            timeslots = {1}
            events={newevents}
            views={allViews}
            step={45}
            onSelectEvent={event => alert(
                "Предмет: " + event.title +" ("+ event.Type +")" +
                "\nПреподаватель: " + event.prepod + 
                "\nКабинет: " + event.Kab +
                "\nПодгруппа: " + event.Subg
            )}
        />
        );  
    }
}
