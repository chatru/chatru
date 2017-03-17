<template>
    <div class="app-wrapper">
        <connection-list></connection-list>
        <div class="chat-wrapper"></div>
        <div class="details-wrapper"></div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'

    import Connections from './Connections.vue'

    @Component({
        components: {
            'connection-list': Connections
        }
    })
    export default class App extends Vue {     }

</script>