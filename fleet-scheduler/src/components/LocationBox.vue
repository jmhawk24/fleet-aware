<template>
    <div>
        <h1>{{location.name}}</h1>
        <truck-row 
            v-for="truck in currentTrucks" 
            :key="truck.id" 
            :truckProp="truck"
            :locationList="locationList"
            @moveVehicleEvent="receiveMoveEvent($event)">
        </truck-row>
    </div>
</template>

<script>
import TruckRow from './TruckRow'

export default {
    components: { TruckRow },
    props: ['allTrucks', 'location', 'locationList'],
    computed: {
        currentTrucks: function() {
            return this.allTrucks.filter( (truck) => {
                return truck.locationId === this.location.id
            })
        }
    },
    data: function() {
        return {
            currentTruckCount: 0
        }
    },
    methods: {
        receiveMoveEvent: function($event) {
            let newEvent = $event
            this.$emit('forwarded-move-event', newEvent);
        }
    }
}
</script>

<style>

</style>