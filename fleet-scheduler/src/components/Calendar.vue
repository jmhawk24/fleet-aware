<template>
  <div>
      <h1> Hi calendar clowns</h1>
      <span> type your event info here: </span>
      <input type=textarea v-model="eventInput" />
      <FullCalendar :options="calendarOptions"/>
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue';
import DayGridPlugin from '@fullcalendar/daygrid';
import TimeGridPlugin from '@fullcalendar/timegrid';
import InteractionPlugin from '@fullcalendar/interaction';
import ListPlugin from '@fullcalendar/list';


export default {
    components: {
        FullCalendar
    },
    data() {
        return {
            calendarOptions: {
                plugins: [DayGridPlugin, TimeGridPlugin, InteractionPlugin, ListPlugin],
                initialView: 'dayGridMonth',
                dateClick: this.addEvent,
                eventClick: this.handleEventClick,
                events: []
            },
            eventInput: ""
        }
    },
    methods: {
        addEvent: function(arg) {
            if (this.eventInput.length > 0) {
                let newTitle = this.eventInput;
                let clickedDate = arg.dateStr;
                let newEvent = {
                    id: new Date,
                    title: newTitle,
                    date: clickedDate
                }
                this.calendarOptions.events.push(newEvent);
            }
        },
        handleEventClick: function(arg) {
            let eventObj = arg.event;
            let indexToRemove = this.calendarOptions.events.findIndex(event => {
                return event.title == eventObj.title && event.date == eventObj.date
            })
            this.calendarOptions.events.splice(indexToRemove, 1);
        }
    }
}
</script>

<style>

</style>