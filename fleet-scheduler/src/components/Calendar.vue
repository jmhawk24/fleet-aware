<template>
  <div>
      <h1> Hi calendar clowns</h1>
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
    data: () => ({
        calendarOptions: {
            plugins: [DayGridPlugin, TimeGridPlugin, InteractionPlugin, ListPlugin],
            initialView: 'dayGridMonth'
        }
    })
}
</script>

<style>

</style>