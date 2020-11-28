<template>
  <div>
      <span>{{truck.name}}</span>
      <select v-model="selected">
          <option disabled value="">Select New Location</option>
          <option 
            v-for="location in this.locationList" 
            :key="location.id"
            :value="location.id"
            >
                {{location.name}}
            </option>
      </select>
      <button @click="handleMoveEvent">Move</button>
  </div>
</template>

<script>
export default {
    props: ['truckProp', 'locationList'],
    computed: {
        truck: function() {
            return this.truckProp
        },
    },
    data() {
        return {
            selected: 0
        }
    },
    methods: {
        handleMoveEvent: function() {
            this.$emit('moveVehicleEvent', {
                vehicleId: this.truck.id,
                newLocationId: this.selected
            })
        }
    }
}
</script>

<style>

</style>