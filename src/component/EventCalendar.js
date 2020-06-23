
import React, {Component} from 'react'
import '../App.css'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'


export default class EventCalendar extends React.Component{
  calendarComponentRef = React.createRef()
  state = {
    calendarEvents: []
  }
  render() {
    return (
          <FullCalendar
            defaultView="dayGridMonth"
            plugins={[dayGridPlugin, interactionPlugin]}
            dateClick={ this.handleDateClick }
            events={ this.state.calendarEvents }
            />
    )
  }

  handleDateClick = (arg) => {
    if (window.confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
      var title = prompt("Event Description:");
      this.setState({  // add new event data
        calendarEvents: this.state.calendarEvents.concat({ // creates a new array
          title: title,
          start: arg.date,
          allDay: arg.allDay,
          editable:true,
        })
      })
    }
  }
}
