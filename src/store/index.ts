import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import * as chatroom from './modules/chatroom'
import * as connections from './modules/connections'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export const store = new Vuex.Store({
  modules: { chatroom, connections },
  strict: debug,
  plugins: debug ? [createLogger({})] : []
})
