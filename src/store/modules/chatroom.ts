import * as types from '../mutation-types'

export interface IMessage {
    author: string
    id: string
    text: string
    time: string
}

export interface IState {
    title: string
    messages: Array<IMessage>
}

export const getters = {
    title: (state: IState) => state.title,
    messages: (state: IState) => state.messages
}

// effects
export const actions = {
}

export const mutations = {
    /*[types.ADD_FIELD](state) {
        state.fields.push({ indent: 0, name: '', type: 'String' })
    },

    [types.CHANGE_DESCRIPTION](state, { description }) {
        state.description = description
    },

    [types.CHANGE_ID](state) {
        state.id = randomString()
    },

    [types.CHANGE_NAME](state, { name }) {
        state.name = name
    },

    [types.DELETE_FIELD](state, { index }) {
        state.fields.splice(index, 1)
    },

    [types.UPDATE_FIELD](state, { index, field }) {
        Object.assign(state.fields[index], field)
    }*/
}
