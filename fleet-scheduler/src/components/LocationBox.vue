<template>
    <div>
        <h1>{{name}}</h1>
        <div v-for="truck in currentTrucks" :key="truck.id">
            {{truck.name}}
        </div>
    </div>
</template>

<script>
export default {
    props: ['trucks', 'name'],
    computed: {
        currentTrucks: function() {
            return this.trucks
        }
    },
    data: function() {
        return {
            currentTruckCount: 0
        }
    }
}
</script>

<style>

</style>