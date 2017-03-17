import * as types from '../mutation-types'

export interface IFriend {
    active?: boolean
    id: string
    lastMessage?: {
        text: string
        time: Date
    }
    name: string
    pendingMessages: number
}

export interface IChannel {
    id: string
    lastMessage?: {
        author: string
        text: string
        time: Date
    }
    name: string
    pendingMessages: number
}

export interface IState {
    friends: Array<IFriend>,
    channels: Array<IChannel>
}

export const state: IState = {
    channels: [],
    friends: [
        {
            id: 'dogroo',
            lastMessage: {
                text: 'i wanna go skydiving and you refuse to take me!\ndo you hate me?\n do yo?\n do you? i know you do!',
                time: new Date('2017-03-17T05:45:37.407')
            },
            name: 'dogroo singh sutiya',
            pendingMessages: 2
        },
        {
            id: 'scoobyru',
            lastMessage: {
                text: 'scooby. ruby. ru.',
                time: new Date('2017-01-28T09:14:18.877')
            },
            name: 'scoobyru',
            pendingMessages: 1
        },
        {
            active: true,
            id: 'shikshu',
            lastMessage: {
                text: 'help! help! you are not helping!',
                time: new Date('2017-02-18T08:05:36.100')
            },
            name: 'shiक्षु',
            pendingMessages: 3
        },
        {
            id: 'fakepolru',
            name: 'paridhi singh',
            pendingMessages: 0
        }
    ]
}

export const getters = {
    channels: (state: IState) => state.channels,
    friends: (state: IState) => state.friends
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
