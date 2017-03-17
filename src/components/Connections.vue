<template>
<div class="connections">
    <div class="type">
        <div class="label">
            <span class="text">Friends</span>
            <div class="icons">
                <i class="fa fa-search"></i>
            </div>
        </div>
        <div :class="{ activated: friend.active }" class="item" v-for="friend in friends">
            <div class="title">
                <div class="name">{{friend.name}}</div>
                <div class="alert" v-if="friend.pendingMessages">{{friend.pendingMessages}}</div>
            </div>
            <div class="content" v-if="friend.lastMessage">
                <div class="text">{{friend.lastMessage.text}}</div>
                <div class="time">{{friend.lastMessage.time.toString()}}</div>
            </div>
            <div class="empty-content" v-else>No Messages</div>
        </div>
        <div class="new">Make a new friend</div>
    </div>
    <div class="type">
        <div class="label">
            <span class="text">Channel</span>
            <div class="icons">
                <i class="fa fa-search"></i>
            </div>
        </div>
        <div class="item" v-for="channel in channels">
            <span>{{channel.name}}</span>
        </div>
        <div class="new">Create a new channel</div>
    </div>
</div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import { mapMutations, mapGetters } from 'vuex'

    @Component({
        computed: {...mapGetters(['channels', 'friends'])}
    })
    export default class Connections extends Vue {
     }

</script>