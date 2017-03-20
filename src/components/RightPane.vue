<template>
    <div class="right-pane">
        <div class="session">
            <div class="time">
                <span>This session started on {{session.start.toLocaleString()}}</span>
                <span v-if="session.end">and ended on {{session.end.toLocaleString()}}</span>
            </div>
            <div class="stats">
                <div class="participants">
                    <div>Participants</div>
                    <div>{{session.participants}}</div>
                </div>
                <div class="messages">
                    <div>Messages</div>
                    <div>{{session.messages}}</div>
                </div>
            </div>
            <figure :class="{ activated: polugin.activated }" class="polugin-figure" v-for="polugin of polugins">
                <img height="25" :src="polugin.logo" width="50" />
                <figcaption class="caption">{{polugin.name}}</figcaption>
            </figure>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import { mapMutations, mapGetters } from 'vuex'

    @Component({
        computed: { ...mapGetters(['polugins', 'session']) }
    })
    export default class RightPane extends Vue {
    }

</script>