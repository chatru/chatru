declare module "*.vue" {
    import Vue from 'vue'
    export default typeof Vue
}

declare const process: {
    env: {
        NODE_ENV: string
    }
}
