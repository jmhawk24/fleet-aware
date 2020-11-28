<template>
  <div>
      <h1> Hello</h1>
    <location-box v-for="location in locations" :key="location.id" :trucks="trucks" :name="location.name"></location-box>
  </div>
</template>

<script>
import LocationBox from './LocationBox'

var truckData = [
    {id: 1, name: 'MCT1', location: 1},
    {id: 2, name: 'MCT2', location: 1}
];

var locationData = [
    {id: 1, name: 'Theatre'},
    {id: 2, name: 'Second Lot'},
    {id: 3, name: 'Bob\'s Repair Dungeon'}
]

export default {
  components: { LocationBox },
  computed: {
      trucks: function() {
          return truckData
      },
      locations: function() {
          return locationData
      }
  },
}
</script>

<style>

</style>LocationBox