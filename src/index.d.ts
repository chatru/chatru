declare module "*.vue" {
    import Vue from 'vue'
    export default typeof Vue
}

declare module 'vue-monaco-editor' {
    import Vue from 'vue'
    export default typeof Vue
}

declare const process: {
    env: {
        NODE_ENV: string
    }
}
