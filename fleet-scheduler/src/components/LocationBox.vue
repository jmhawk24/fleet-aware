<template>
    <div>
        <h1>{{location.name}}</h1>
        <truck-row 
            v-for="truck in currentTrucks" 
            :key="truck.id" 
            :truckProp="truck"
            :locationList="locationList"
            @moveEvent="receiveMoveEvent($event)">
        </truck-row>
    </div>
</template>

<script>
import TruckRow from './TruckRow'

export default {
    components: { TruckRow },
    props: ['trucks', 'location', 'locationList'],
    computed: {
        currentTrucks: function() {
            return this.trucks.filter( (truck) => {
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
            this.$emit('forward-move-event', $event);
        }
    }
}
</script>

<style>

</style>