import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from './events';
import 'react-big-calendar/lib/css/react-big-calendar.css';

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
  );

export default class Calend extends Component {
    render(){
      return(
          <BigCalendar 
          events={events}
          views={allViews}
          step={60}
          defaultDate={new Date(2015, 3, 1)}
          />
      );  
    }
  }