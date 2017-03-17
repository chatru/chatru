<template>
    <div class="chat">
        <div class="title"></div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component({
        components: {
            'connection-list': Connections
        }
    })
    export default class Chat extends Vue {     }

</script>