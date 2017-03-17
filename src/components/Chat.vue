<template>
    <div class="chat">
        <div class="title">
            <div class="text">{{title}}</div>
            <div class="icons">
                <i class="fa fa-user-plus"></i>
            </div>
        </div>
        <div class="messages">
            <div class="message" v-for="message in messages"></div>
        </div>
        <div class="textarea">
            <textarea></textarea>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import { mapMutations, mapGetters } from 'vuex'

    @Component({
        computed: {...mapGetters(['title', 'messages'])}
    })
    export default class Chat extends Vue {     }

</script>