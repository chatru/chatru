<template>
    <div class="right-pane"></div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component({
        components: {
            'connection-list': Connections
        }
    })
    export default class RightPane extends Vue {     }

</script>