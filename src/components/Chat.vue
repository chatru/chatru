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
        <div class="input">
            <monaco-editor code="" height="100" language="markdown" :options="options" srcPath="" theme="vs"></monaco-editor>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import { mapMutations, mapGetters } from 'vuex'
    import MonacoEditor from 'vue-monaco-editor'

    @Component({
        components: {
            'monaco-editor': MonacoEditor
        },
        computed: { ...mapGetters(['title', 'messages']) }
    })
    export default class Chat extends Vue {
        options = {
            lineNumbers: false,
            glyphMargin: false

        }
    }

</script>