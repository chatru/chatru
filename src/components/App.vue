<template>
    <div class="app-wrapper">
        <connection-list></connection-list>
        <chat></chat>
        <right-panel></right-panel>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'

    import Chat from './Chat.vue'
    import Connections from './Connections.vue'
    import RightPane from './RightPane.vue'

    @Component({
        components: {
            'chat': Chat,
            'connection-list': Connections,
            'right-panel': RightPane
        }
    })
    export default class App extends Vue {     }

</script>