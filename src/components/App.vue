<template>
    <div class="app-wrapper">
        <connection-list></connection-list>
        <chat></chat>
        <div class="details-wrapper"></div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'

    import Chat from './Chat.vue'
    import Connections from './Connections.vue'

    @Component({
        components: {
            'chat': Chat,
            'connection-list': Connections
        }
    })
    export default class App extends Vue {     }

</script>