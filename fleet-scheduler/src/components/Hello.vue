<template>
  <div>
      <h1> Hello</h1>
    <location-box 
        v-for="location in locations" 
        :key="location.id" 
        :allTrucks="allTrucks" 
        :location="location"
        :locationList="locations"
        @forwarded-move-event="receiveForwardedMoveEvent($event)"></location-box>
  </div>
</template>

<script>
import LocationBox from './LocationBox'

var truckData = [
    {id: 1, name: 'MCT1', locationId: 1},
    {id: 2, name: 'MCT2', locationId: 1},
    {id: 3, name: 'MCT3', locationId: 1},
    {id: 4, name: 'MCT90', locationId: 1},
    {id: 5, name: 'MCT91', locationId: 1},
    {id: 6, name: 'MCT92', locationId: 1},
    {id: 7, name: 'MCT93', locationId: 1},
    {id: 8, name: 'MCT1600', locationId: 1},
     {id: 9, name: 'MCT1601', locationId: 1},
     {id: 10, name: 'MCT1608', locationId: 1},
     {id: 11, name: 'MCT1609', locationId: 1}
];

var locationData = [
    {id: 1, name: 'Theatre'},
    {id: 2, name: 'Second Lot'},
    {id: 3, name: 'Bob\'s Repair Dungeon'}
]

export default {
  components: { LocationBox },
  computed: {
      locations: function() {
          return locationData
      }
  },
  data() {
      return {
          allTrucks: truckData
      }
  },
  methods: {
      receiveForwardedMoveEvent: function($event) {
          let vehicleId = $event.vehicleId;
          let newLocationId = $event.newLocationId
          this.allTrucks.forEach( truck => {
              if (truck.id == vehicleId) {
                  truck.locationId = newLocationId
              }
          })
      }
  }
}
</script>

<style>

</style>LocationBox